import { SidebarProvider } from "@/components/ui/sidebar"
import { BottomNav } from "@/components/BottomNav"
import { PostCard } from "@/components/PostCard"
import { Stories } from "@/components/Stories"
import { Bell, Plus } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CreatorOnboardingForm } from "@/components/CreatorOnboardingForm"
import { useState } from "react"

const posts = [
  {
    author: {
      name: "Alana maesya",
      username: "Naisyaatxt",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alana",
      verified: true
    },
    content: "Love your mine",
    image: "/lovable-uploads/d0595dfe-efdd-4f37-8784-f07091866dc6.png",
    timestamp: "2 hours ago",
    likes: 1245,
    comments: 173,
    shares: 229,
    hashtags: ["loveyou", "foryourpage", "beautifull", "popular", "peoplefrost"]
  },
  {
    author: {
      name: "David Omondi",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      subscriptionType: 'paid' as const
    },
    content: "Latest comedy skit! 😂 #comedy #entertainment",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop",
    timestamp: "4 hours ago",
    likes: 892,
    comments: 45,
    isPremium: true,
    isBlurred: true
  },
  {
    author: {
      name: "Grace Muthoni",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grace",
      subscriptionType: 'free' as const
    },
    content: "Beautiful sunset in Mombasa! 🌅 #travel #kenya",
    image: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?w=800&auto=format&fit=crop",
    timestamp: "6 hours ago",
    likes: 567,
    comments: 23,
    isPremium: false
  }
]

const Index = () => {
  const [showCreatorDialog, setShowCreatorDialog] = useState(false)
  const isCreator = false // This would normally come from your auth context

  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen w-full bg-gray-50 dark:bg-gray-900">
        {/* Top Bar */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-2 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/103e6a11-94f2-45bc-b121-92dc0f12fb5d.png" 
              alt="PEARL FANS" 
              className="h-10 object-contain"
            />
          </div>
          <div className="flex items-center gap-4">
            {!isCreator && (
              <Dialog open={showCreatorDialog} onOpenChange={setShowCreatorDialog}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Plus className="h-4 w-4" />
                    Become a Creator
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Become a Creator</DialogTitle>
                    <DialogDescription>
                      Set up your creator profile to start sharing content
                    </DialogDescription>
                  </DialogHeader>
                  <CreatorOnboardingForm />
                </DialogContent>
              </Dialog>
            )}
            <Link to="/notifications" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <Bell className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </Link>
          </div>
        </div>
        
        <main className="flex-1 pb-20 mt-16">
          <div className="mx-auto bg-white dark:bg-gray-800 shadow-sm">
            <Stories />
            <div className="p-4 space-y-4">
              {posts.map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
            </div>
          </div>
        </main>
        <BottomNav />
      </div>
    </SidebarProvider>
  )
}

export default Index