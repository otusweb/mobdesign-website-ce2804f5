import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.0";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    const submission: ContactSubmission = await req.json();
    
    console.log("Processing contact submission:", { name: submission.name, email: submission.email });

    // Store in database
    const { data, error: dbError } = await supabase
      .from("contact_submissions")
      .insert([submission])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to store submission");
    }

    console.log("Submission stored successfully:", data.id);

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["your-email@example.com"], // Replace with your actual email
      subject: `New Contact Form Submission: ${submission.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        ${submission.company ? `<p><strong>Company:</strong> ${submission.company}</p>` : ''}
        <p><strong>Subject:</strong> ${submission.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${submission.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
    });

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Contact Confirmation <onboarding@resend.dev>",
      to: [submission.email],
      subject: "Thank you for contacting us!",
      html: `
        <h2>Thank you for reaching out, ${submission.name}!</h2>
        <p>We have received your message about "<strong>${submission.subject}</strong>" and will get back to you as soon as possible.</p>
        
        <h3>Your submission details:</h3>
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        ${submission.company ? `<p><strong>Company:</strong> ${submission.company}</p>` : ''}
        <p><strong>Subject:</strong> ${submission.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${submission.message.replace(/\n/g, '<br>')}</p>
        
        <p>Best regards,<br>The Team</p>
      `,
    });

    console.log("Emails sent successfully");

    return new Response(JSON.stringify({ 
      success: true, 
      id: data.id,
      adminEmail: adminEmailResponse,
      userEmail: userEmailResponse
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in submit-contact function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Internal server error",
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);