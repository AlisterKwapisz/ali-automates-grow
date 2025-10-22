import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface User {
  id: string;
  email: string;
  created_at: string;
  updated_at: string;
  profile?: UserProfile;
}

export interface UserProfile {
  id: string;
  user_id: string;
  full_name: string;
  avatar_url?: string;
  company?: string;
  role?: string;
  created_at: string;
  updated_at: string;
}

export interface Article {
  id: string;
  user_id: string;
  title: string;
  content: string;
  status: 'draft' | 'published' | 'archived';
  tags: string[];
  created_at: string;
  updated_at: string;
}

export interface Chatbot {
  id: string;
  user_id: string;
  name: string;
  description: string;
  system_prompt: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ChatMessage {
  id: string;
  chatbot_id: string;
  user_id: string;
  role: 'user' | 'assistant';
  content: string;
  created_at: string;
}
