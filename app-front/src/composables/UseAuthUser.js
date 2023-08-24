import { ref } from 'vue'
import useSupabase from 'boot/supabase'

const user = ref(null)
export default function useAuthUser () {
    const { supabase } = useSupabase()
    //LOGIN
    const login = async ({ email, password }) => {
        const { user, error } = await supabase.auth.sighIn({ email, password })
        if(error) throw error
        return user
    }
    //LOGIN PROVIDER
    const loginWithSocialProvider = async (provider) => {
        const { user, error } = await supabase.auth.sighIn({ provider })
        if(error) throw error
        return user
    }
    //LOGOUT
    const logout = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
    }

    const isLoggedIn = () => {
        return !!user.value
    }
    //REGISTER
    const register = async ({ email, password, ...meta }) => {
        const { user, error } = await supabase.auth.signUp(
            { email, password },
            { 
                data: meta,
                redirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation`
            }
        )
        if(error) throw error
        return user
    }
    //UPDATE
    const update = async (data) => {
        const { user, error } = await supabase.auth.update(data)
        if (error) throw error
        return user
    }
    //RESET PASSWORD
    const sendPasswordRestEmail = async (email) => {
        const { user, error } = await supabase.auth.api.resetPasswordForEmail(email)
        if (error) throw error
        return user
    }

    return {
        login,
        loginWithSocialProvider,
        logout,
        isLoggedIn,
        register,
        update,
        sendPasswordRestEmail
    }
}