import { supabase, type User, type UserProfile } from './supabase';
import { useState, useEffect } from 'react';

export interface AuthState {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    profile: null,
    loading: true,
  });

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        await loadUserProfile(session.user.id);
      } else {
        setAuthState({ user: null, profile: null, loading: false });
      }
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          await loadUserProfile(session.user.id);
        } else {
          setAuthState({ user: null, profile: null, loading: false });
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const loadUserProfile = async (userId: string) => {
    try {
      // Get user data
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return;

      // Get user profile
      const { data: profile, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
        console.error('Error loading profile:', error);
      }

      setAuthState({
        user: {
          id: userData.user.id,
          email: userData.user.email || '',
          created_at: userData.user.created_at,
          updated_at: userData.user.updated_at || userData.user.created_at,
          profile: profile || undefined,
        },
        profile: profile || null,
        loading: false,
      });
    } catch (error) {
      console.error('Error loading user profile:', error);
      setAuthState({ user: null, profile: null, loading: false });
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;

      // Create user profile
      if (data.user) {
        const { error: profileError } = await supabase
          .from('user_profiles')
          .insert({
            user_id: data.user.id,
            full_name: fullName,
          });

        if (profileError) {
          console.error('Error creating profile:', profileError);
        }
      }

      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!authState.user) return { error: 'No user logged in' };

    try {
      const { error } = await supabase
        .from('user_profiles')
        .update(updates)
        .eq('user_id', authState.user.id);

      if (error) throw error;

      // Reload profile
      await loadUserProfile(authState.user.id);
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  return {
    ...authState,
    signUp,
    signIn,
    signOut,
    updateProfile,
  };
};
