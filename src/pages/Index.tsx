import { SidebarProvider } from "@/components/ui/sidebar"
import { MainSidebar } from "@/components/MainSidebar"
import { BottomNav } from "@/components/BottomNav"
import { PostCard } from "@/components/PostCard"
import { Stories } from "@/components/Stories"
import { Heart, MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

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
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background relative">
        {/* Top Bar */}
        <div className={`fixed top-0 left-0 right-0 z-50 bg-background border-b px-4 py-2 flex justify-between items-center transition-transform duration-300 ${!isVisible ? '-translate-y-full' : 'translate-y-0'}`}>
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/103e6a11-94f2-45bc-b121-92dc0f12fb5d.png" 
              alt="PEARL FANS" 
              className="h-8"
            />
            <span className="text-2xl font-bold">PEARL FANS</span>
          </div>
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
          <div className="mx-auto max-w-2xl">
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
