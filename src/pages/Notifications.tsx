import { ArrowLeft, Search, Settings } from "lucide-react"
import { Link } from "react-router-dom"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar } from "@/components/ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import { Button } from "@/components/ui/button"

const notifications = [
  {
    id: 1,
    author: {
      name: "Deli",
      username: "@deliluv",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Deli",
      verified: true
    },
    content: "is currently running a promotion, check it out",
    subtext: "ONLY 3 SPOTS LEFT!! 👀 I know you will love it, let's have some fun!",
    timestamp: "1 hour ago"
  },
  {
    id: 2,
    author: {
      name: "CeeCollection",
      username: "@eroticdomination",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cee",
      verified: true
    },
    content: "has started a new live stream",
    timestamp: "Yesterday"
  },
  // ... more notifications
]

const Notifications = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 rounded-full hover:bg-accent">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-xl font-bold">Notifications</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="mt-4">
          <TabsList className="w-full justify-start gap-2 h-auto bg-transparent">
            <TabsTrigger 
              value="all" 
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              All
            </TabsTrigger>
            <TabsTrigger 
              value="tags" 
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Tags
            </TabsTrigger>
            <TabsTrigger 
              value="comments" 
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Comments
            </TabsTrigger>
            <TabsTrigger 
              value="mentions" 
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Mentions
            </TabsTrigger>
            <TabsTrigger 
              value="subscriptions" 
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Subscriptions
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Notifications List */}
      <div className="mt-32 px-4 space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex gap-3 p-4 hover:bg-accent rounded-lg">
            <Avatar className="h-12 w-12">
              <AvatarImage src={notification.author.avatar} />
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <span className="font-semibold">{notification.author.name}</span>
                {notification.author.verified && (
                  <span className="text-blue-500">✓</span>
                )}
              </div>
              <p className="text-muted-foreground text-sm">{notification.author.username}</p>
              <p className="mt-1">{notification.content}</p>
              {notification.subtext && (
                <p className="text-muted-foreground mt-1">{notification.subtext}</p>
              )}
              <p className="text-muted-foreground text-sm mt-2">{notification.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notifications