import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://iimvvtrgsjjxyikfbqua.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpbXZ2dHJnc2pqeHlpa2ZicXVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzODM2MjQsImV4cCI6MjAxMzk1OTYyNH0.TZCyhzE5B9IsX_D95CwpiKFLdbPfsdBCCQ1O05NITX0";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
