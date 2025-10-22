# Database Setup Instructions

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# OpenAI API (for AI features)
VITE_OPENAI_API_KEY=your_openai_api_key

# Other API Keys (if needed)
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key
```

## Supabase Setup

1. Create a new Supabase project at https://supabase.com
2. Go to the SQL Editor in your Supabase dashboard
3. Run the SQL commands from `supabase-schema.sql` to create the database schema
4. Copy your project URL and anon key from the API settings
5. Add them to your `.env` file

## Database Schema

The unified database includes:

### Tables:
- `user_profiles` - User profile information
- `articles` - Articles created by Writer Wizard Hub
- `chatbots` - AI employees created by Chatbot LM
- `chat_messages` - Chat messages for AI employees

### Features:
- Row Level Security (RLS) enabled
- Automatic profile creation on user signup
- Proper foreign key relationships
- Indexes for performance
- Triggers for updated_at timestamps

## Authentication

The app uses Supabase Auth with:
- Email/password authentication
- Automatic profile creation
- Unified user sessions across all tools
- Secure API access with RLS policies
