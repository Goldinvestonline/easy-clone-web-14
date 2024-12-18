import { SidebarProvider } from "@/components/ui/sidebar"
import { MainSidebar } from "@/components/MainSidebar"
import { BottomNav } from "@/components/BottomNav"
import { PostCard } from "@/components/PostCard"
import { Stories } from "@/components/Stories"

// Sample data for demonstration
const posts = [
  {
    author: {
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    content: "Just launched my new project! Really excited to share it with everyone. 🚀",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 5,
  },
  {
    author: {
      name: "Jane Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    },
    content: "Beautiful day for coding! Working on some new features. ☀️💻",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop",
    timestamp: "4 hours ago",
    likes: 15,
    comments: 3,
  },
]

const Index = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
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