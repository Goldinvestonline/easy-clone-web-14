// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://yyosmvtjatapjcmcfgeh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5b3NtdnRqYXRhcGpjbWNmZ2VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwNjQ2MTYsImV4cCI6MjA1MjY0MDYxNn0.R9nuGLk1UA7i6XuZhZxsD6TkVOtzwaa9uGd7-yH-IME";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);