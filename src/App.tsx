import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { SidebarProvider } from "@/components/ui/sidebar"
import { createClient } from '@supabase/supabase-js'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import Index from "./pages/Index"
import Profile from "./pages/Profile"
import Messages from "./pages/Messages"
import CreatePost from "./pages/CreatePost"
import Notifications from "./pages/Notifications"
import Explore from "./pages/Explore"
import Auth from "./pages/Auth"
import { supabase } from "@/integrations/supabase/client"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SessionContextProvider supabaseClient={supabase}>
      <TooltipProvider>
        <SidebarProvider>
          <div className="flex min-h-screen w-full max-w-md mx-auto bg-background">
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/" element={<Index />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </BrowserRouter>
          </div>
        </SidebarProvider>
      </TooltipProvider>
    </SessionContextProvider>
  </QueryClientProvider>
)

export default App