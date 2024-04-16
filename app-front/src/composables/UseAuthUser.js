import { ref } from 'vue'
import useSupabase from 'boot/supabase'

const user = ref(null)

export default function useAuthUser () {
    const { supabase } = useSupabase()
    //LOGIN
    //SUPABASE V1 = sighIn
    //SUPABASE V2 = signInWithPassword
    const login = async ({ email, password }) => {
        const { user, error } = await supabase.auth.signInWithPassword({ email, password })
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
            { 
                email, password,
                options: {
                    data: meta,
                    redirectTo: `${window.location.origin}/me?fromEmail=registrationConfirmation`
                }
            },
        )   
        if(error) throw error
        return user
    }

    //UPDATE

    //const update = async (data) => {
    //    const { user, error } = await supabase.auth.update(data)
    //    if (error) throw error
    //    return user
    //}

    //UPDATE EMAIL
    const updateEmail = async (email) => {
        const { user, error } = await supabase.auth.updateUser({
            email,
        })
        if (error) throw error
        return user
    }
    //UPDATE USERNAME
    const updateName = async (...meta) => {
        const { user, error } = await supabase.auth.updateUser({
            options: {
                data: meta,
            }
        })
        if (error) throw error
        return user
    }

    //RESET PASSWORD
    const sendPasswordRestEmail = async (email) => {
        const { user, error } = await supabase.auth.resetPasswordForEmail(email)
        if (error) throw error
        return user
    }

    const resetPassword = async (accesToken, newPassword) => {
        const { user, error } = await supabase.auth.updateUser({
            accesToken,
            password: newPassword
        })
        if (error) throw error
        return user
    }

    return {
        user,
        login,
        loginWithSocialProvider,
        logout,
        isLoggedIn,
        register,
        sendPasswordRestEmail,
        resetPassword,
        updateEmail,
        updateName,
    }
}