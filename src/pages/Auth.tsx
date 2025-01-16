import { useEffect, useState } from "react"
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { useNavigate } from "react-router-dom"
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import type { AuthError } from "@supabase/supabase-js"

const Auth = () => {
  const [errorMessage, setErrorMessage] = useState("")
  const session = useSession()
  const navigate = useNavigate()
  const supabase = useSupabaseClient()

  useEffect(() => {
    if (session) {
      navigate("/")
    }
  }, [session, navigate])

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN") {
        navigate("/")
      }
      if (event === "USER_UPDATED") {
        const { error } = await supabase.auth.getSession()
        if (error) {
          setErrorMessage(getErrorMessage(error))
        }
      }
      if (event === "SIGNED_OUT") {
        setErrorMessage("")
      }
    })

    return () => subscription.unsubscribe()
  }, [navigate, supabase.auth])

  const getErrorMessage = (error: AuthError) => {
    switch (error.message) {
      case "Invalid login credentials":
        return "Invalid email or password. Please check your credentials and try again."
      case "Email not confirmed":
        return "Please verify your email address before signing in."
      case "User not found":
        return "No user found with these credentials."
      default:
        return error.message
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/103e6a11-94f2-45bc-b121-92dc0f12fb5d.png" 
            alt="Logo" 
            className="h-12 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold">Welcome to PEARL FANS</h1>
          <p className="text-gray-600">Sign in to continue</p>
        </div>

        {errorMessage && (
          <Alert variant="destructive">
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        <div className="bg-white p-6 rounded-lg shadow-md">
          <SupabaseAuth 
            supabaseClient={supabase}
            appearance={{ 
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#2563eb',
                    brandAccent: '#1d4ed8',
                  },
                },
              },
            }}
            providers={[]}
          />
        </div>
      </div>
    </div>
  )
}

export default Auth