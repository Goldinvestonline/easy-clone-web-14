import { SidebarProvider } from "@/components/ui/sidebar"
import { MainSidebar } from "@/components/MainSidebar"
import { BottomNav } from "@/components/BottomNav"
import { PostCard } from "@/components/PostCard"
import { Stories } from "@/components/Stories"

// Sample data for demonstration
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
        {/* Logo */}
        <div className="absolute top-4 left-4 z-50">
          <img 
            src="/lovable-uploads/1530a3f7-da7d-4b15-b009-68dcd81602c7.png" 
            alt="Pearl Jams Logo" 
            className="h-8 w-auto"
          />
        </div>
        
        <MainSidebar />
        <main className="flex-1 pb-20 md:pb-6">
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