import { supabase } from './supabase'

export interface ProfileUpdate {
  username: string
  fullName: string
  dob: string
  gender: string | null
  phone: string | null
  address: string | null
  bio: string | null
}

export async function updateProfile(
  userId: string,
  input: ProfileUpdate,
): Promise<void> {
  if (!supabase) throw new Error('Supabase chưa được cấu hình.')
  const { error } = await supabase
    .from('profiles')
    .update({
      username: input.username,
      full_name: input.fullName,
      dob: input.dob,
      gender: input.gender,
      phone: input.phone,
      address: input.address,
      bio: input.bio,
    })
    .eq('id', userId)
  if (error) throw error
}
