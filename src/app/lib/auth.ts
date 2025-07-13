import { supabase } from './supabase'
import { User } from './types'

export interface AuthUser extends User {
// Add any additional auth-specific fields
}

export interface SignUpData {
    email: string
    password: string
    username: string
    role: 'homeowner' | 'tradie' | 'company'
}

export interface SignInData {
email: string
password: string
}

// Sign up new user
export const signUp = async (data: SignUpData) => {
    // Your implementation here
    // Hint: Use supabase.auth.signUp() and then create user record
}

// Sign in existing user
export const signIn = async (data: SignInData) => {
    // Your implementation here
    // Hint: Use supabase.auth.signInWithPassword()
  }



// Sign out user
export const signOut = async () => {
    // Your implementation here
    // Hint: Use supabase.auth.signOut()
  }
  
  // Get current user
  export const getCurrentUser = async () => {
    // Your implementation here
    // Hint: Use supabase.auth.getUser()
  }
  
  