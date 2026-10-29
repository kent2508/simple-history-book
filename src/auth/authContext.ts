import type { User } from '@supabase/supabase-js'
import { createContext } from 'react'

export interface SignUpProfile {
  username: string
  fullName: string
  dob: string
  gender?: string
  phone?: string
  address?: string
  bio?: string
}

/** Hồ sơ người dùng, khớp bảng profiles */
export interface Profile {
  id: string
  username: string
  fullName: string
  dob: string
  gender: string | null
  phone: string | null
  address: string | null
  bio: string | null
  role: string
}

export interface AuthContextValue {
  user: User | null
  profile: Profile | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (
    email: string,
    password: string,
    profile: SignUpProfile,
  ) => Promise<void>
  signOut: () => Promise<void>
  refreshProfile: () => Promise<void>
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)
