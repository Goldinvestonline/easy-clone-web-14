import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SidebarProvider } from "@/components/ui/sidebar"
import Index from "./pages/Index"
import Profile from "./pages/Profile"
import Messages from "./pages/Messages"
import CreatePost from "./pages/CreatePost"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SidebarProvider>
        <div className="flex min-h-screen w-full max-w-md mx-auto bg-background">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/explore" element={<div>Explore page coming soon</div>} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/notifications" element={<div>Notifications page coming soon</div>} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </BrowserRouter>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App