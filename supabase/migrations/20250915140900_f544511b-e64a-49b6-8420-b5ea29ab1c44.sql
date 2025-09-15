-- Update the SELECT policy to allow authenticated users to read contact submissions
DROP POLICY IF EXISTS "Only authenticated users can view submissions" ON public.contact_submissions;

CREATE POLICY "Authenticated users can view all submissions" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated
USING (true);