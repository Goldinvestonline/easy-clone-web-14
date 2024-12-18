import { SidebarProvider } from "@/components/ui/sidebar"
import { MainSidebar } from "@/components/MainSidebar"
import { BottomNav } from "@/components/BottomNav"
import { MessagesView } from "@/components/MessagesView"

// Sample messages data for demonstration
const messages = [
  {
    id: "1",
    sender: {
      name: "Sarah Auma",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    lastMessage: "Hey, how are you doing?",
    timestamp: "2 min ago",
    unread: true
  },
  {
    id: "2",
    sender: {
      name: "David Omondi",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    },
    lastMessage: "Thanks for subscribing to my content!",
    timestamp: "1 hour ago"
  },
  {
    id: "3",
    sender: {
      name: "Grace Muthoni",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grace"
    },
    lastMessage: "Looking forward to your next post",
    timestamp: "2 hours ago"
  }
]

const Index = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <MainSidebar />
        <main className="flex-1 pb-20 md:pb-6">
          <div className="mx-auto max-w-2xl p-6">
            <MessagesView messages={messages} />
          </div>
        </main>
        <BottomNav />
      </div>
    </SidebarProvider>
  )
}

export default Index