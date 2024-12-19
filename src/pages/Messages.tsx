import { ArrowLeft, Search, Plus, MoreVertical } from "lucide-react"
import { Link } from "react-router-dom"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { BottomNav } from "@/components/BottomNav"

const messages = [
  {
    id: 1,
    username: "@_alicebbgirl_",
    displayName: "ALICE",
    avatar: "/placeholder.svg",
    message: "Honey, I want to have a drea...",
    time: "5:17 am",
    isOnline: true,
    isVerified: true,
  },
  {
    id: 2,
    username: "@blckmini",
    displayName: "Petite Mini",
    avatar: "/placeholder.svg",
    message: "Would you love video call toget...",
    time: "5:15 am",
    isOnline: true,
    isVerified: true,
  },
  {
    id: 3,
    username: "@josefinesilver",
    displayName: "Josefine Silver",
    avatar: "/placeholder.svg",
    message: "What's something you've always wa...",
    time: "5:12 am",
    isOnline: true,
    isVerified: true,
  },
  // Add more messages as needed
]

export default function Messages() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-background border-b">
        <div className="flex items-center gap-4">
          <Link to="/">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-bold">MESSAGES</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Plus className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-gray-500">NEWEST FIRST</h2>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Button variant="secondary" className="rounded-full bg-blue-50 text-black hover:bg-blue-100">
            All
          </Button>
          <Button variant="ghost" className="rounded-full relative">
            Priority
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full px-1.5">
              21
            </span>
          </Button>
          <Button variant="ghost" className="rounded-full relative">
            Unread
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full px-1.5">
              39
            </span>
          </Button>
          <Button variant="ghost" className="rounded-full">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"/>
            </svg>
          </Button>
        </div>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start gap-3 px-4 py-3 border-b relative">
            <div className="relative">
              <Avatar className="h-12 w-12">
                <AvatarImage src={message.avatar} alt={message.displayName} />
                <AvatarFallback>{message.displayName[0]}</AvatarFallback>
              </Avatar>
              {message.isOnline && (
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="font-semibold">{message.displayName}</span>
                {message.isVerified && (
                  <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <span className="text-gray-500 text-sm">{message.username}</span>
              </div>
              <p className="text-gray-600 truncate">{message.message}</p>
            </div>
            <div className="text-sm text-blue-500">{message.time}</div>
            <Button variant="ghost" size="icon" className="absolute right-2 top-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}