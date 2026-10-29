import type { Session, User } from '@supabase/supabase-js'
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { supabase } from '../lib/supabase'
import {
  AuthContext,
  type AuthContextValue,
  type Profile,
  type SignUpProfile,
} from './authContext'

async function fetchProfile(userId: string): Promise<Profile | null> {
  if (!supabase) return null
  const { data, error } = await supabase
    .from('profiles')
    .select('id, username, full_name, dob, gender, phone, address, bio, role')
    .eq('id', userId)
    .single()
  if (error || !data) return null
  return {
    id: data.id as string,
    username: data.username as string,
    fullName: data.full_name as string,
    dob: data.dob as string,
    gender: (data.gender as string | null) ?? null,
    phone: (data.phone as string | null) ?? null,
    address: (data.address as string | null) ?? null,
    bio: (data.bio as string | null) ?? null,
    role: (data.role as string) ?? 'member',
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [resolved, setResolved] = useState(supabase === null)

  useEffect(() => {
    if (!supabase) return

    supabase.auth.getSession().then(async ({ data }) => {
      const sessionUser = data.session?.user ?? null
      setUser(sessionUser)
      if (sessionUser) setProfile(await fetchProfile(sessionUser.id))
      setResolved(true)
    })

    const { data: sub } = supabase.auth.onAuthStateChange(
      async (_event, session: Session | null) => {
        const sessionUser = session?.user ?? null
        setUser(sessionUser)
        setProfile(sessionUser ? await fetchProfile(sessionUser.id) : null)
      },
    )

    return () => sub.subscription.unsubscribe()
  }, [])

  const refreshProfile = useCallback(async () => {
    if (user) setProfile(await fetchProfile(user.id))
  }, [user])

  const value = useMemo<AuthContextValue>(() => {
    async function signIn(email: string, password: string) {
      if (!supabase) throw new Error('Supabase chưa được cấu hình.')
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
    }

    async function signUp(
      email: string,
      password: string,
      profileInput: SignUpProfile,
    ) {
      if (!supabase) throw new Error('Supabase chưa được cấu hình.')
      const { data, error } = await supabase.auth.signUp({ email, password })
      if (error) throw error

      const newUser = data.user
      if (newUser) {
        const { error: profileError } = await supabase.from('profiles').insert({
          id: newUser.id,
          username: profileInput.username,
          full_name: profileInput.fullName,
          dob: profileInput.dob,
          gender: profileInput.gender || null,
          phone: profileInput.phone || null,
          address: profileInput.address || null,
          bio: profileInput.bio || null,
        })
        if (profileError) throw profileError
      }
    }

    async function signOut() {
      if (!supabase) return
      await supabase.auth.signOut()
    }

    return {
      user,
      profile,
      loading: !resolved,
      signIn,
      signUp,
      signOut,
      refreshProfile,
    }
  }, [user, profile, resolved, refreshProfile])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
