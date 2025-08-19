
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ihnhqxrxmkbidjraqrjm.supabase';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlobmhxeHJ4bWtiaWRqcmFxcmptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MTU4NjEsImV4cCI6MjA3MTE5MTg2MX0.1GtkxDmz5hUOOY9RNgNCEp6BQ4sTHMTQ79hb7zWBreE';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase
        