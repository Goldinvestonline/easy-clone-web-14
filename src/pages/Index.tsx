import { SidebarProvider } from "@/components/ui/sidebar"
import { MainSidebar } from "@/components/MainSidebar"
import { BottomNav } from "@/components/BottomNav"
import { PostCard } from "@/components/PostCard"
import { Stories } from "@/components/Stories"
import { Heart, MessageCircle } from "lucide-react"

const posts = [
  {
    author: {
      name: "Sarah Auma",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      subscriptionType: 'hybrid' as const
    },
    content: "New dance video! 🎵 #dance #nairobi",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
    timestamp: "2 hours ago",
    likes: 245,
    comments: 12,
    isPremium: true,
    premiumPrice: 2.99,
    isBlurred: true
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
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background relative">
        {/* Top Bar */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b px-4 py-2 flex justify-between items-center">
          <img 
            src="/lovable-uploads/912d172f-97a2-44eb-9157-887b1c7b75a1.png" 
            alt="Pearl Fans Logo" 
            className="h-16 w-auto"
          />
          <div className="flex items-center gap-4">
            <button className="hover:opacity-70 transition-opacity">
              <Heart className="h-6 w-6" />
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <MessageCircle className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <MainSidebar />
        <main className="flex-1 pb-20 md:pb-6 mt-14">
          <div className="mx-auto max-w-2xl p-6">
            <Stories />
            <div className="space-y-6">
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