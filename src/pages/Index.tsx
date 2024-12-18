import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { MainSidebar } from "@/components/MainSidebar"
import { PostCard } from "@/components/PostCard"

// Sample data for demonstration
const posts = [
  {
    author: {
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    content: "Just launched my new project! Really excited to share it with everyone.",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 5,
  },
  {
    author: {
      name: "Jane Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    },
    content: "Beautiful day for coding! Working on some new features.",
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
        <main className="flex-1 p-6">
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-bold">News Feed</h1>
              <SidebarTrigger />
            </div>
            <div className="space-y-4">
              {posts.map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

export default Index