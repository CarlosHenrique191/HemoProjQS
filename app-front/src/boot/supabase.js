import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://uptdvwfsskpsdzpslmwb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwdGR2d2Zzc2twc2R6cHNsbXdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3OTY1OTYsImV4cCI6MjAwODM3MjU5Nn0.X4WUuoJnJtilSw4znmDys9x5cdt2HtIi04H61EKTZR8'
const supabase = createClient(supabaseUrl, supabaseKey)
//console.log('init supabase:', supabase)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})

export default function useSupabase () {
  return { supabase }
}