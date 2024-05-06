import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ccnbfyoplewvhfrnfhat.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjbmJmeW9wbGV3dmhmcm5maGF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxOTI1MzAsImV4cCI6MjAyODc2ODUzMH0.sZpYIIXX9fAXm529b9fZErca4m2aeTiW8xFCyl66ImY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
