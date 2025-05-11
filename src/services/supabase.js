import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mlapvzghwaojuudxtywm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sYXB2emdod2FvanV1ZHh0eXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MTQ3ODUsImV4cCI6MjA2MTA5MDc4NX0.7-q9A4YBlZbHTmRMWNjMpRgJpHpb5YtT2jANzWrTp7U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
