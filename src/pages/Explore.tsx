import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Stories } from "@/components/Stories"

interface Creator {
  id: string
  name: string
  avatar: string
  bio: string
  followers: number
  isVerified: boolean
}

const mockCreators: Creator[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Digital artist & content creator",
    followers: 15400,
    isVerified: true
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Photography & lifestyle",
    followers: 8900,
    isVerified: true
  },
  {
    id: "3",
    name: "Emma Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Fashion & beauty influencer",
    followers: 12300,
    isVerified: false
  }
]

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("")
  
  return (
    <div className="w-full min-h-screen bg-background">
      {/* Search Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b p-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search creators, users, or content..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Stories Section */}
      <div className="px-4 py-2">
        <Stories />
      </div>

      {/* Popular Creators Section */}
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-4">Popular Creators</h2>
        <div className="space-y-4">
          {mockCreators.map((creator) => (
            <div key={creator.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <img src={creator.avatar} alt={creator.name} className="object-cover" />
                </Avatar>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{creator.name}</span>
                    {creator.isVerified && (
                      <svg className="h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{creator.bio}</p>
                </div>
              </div>
              <Button variant="secondary" className="rounded-full">
                Follow
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-4">Explore Categories</h2>
        <div className="grid grid-cols-2 gap-4">
          {["Art & Design", "Music", "Photography", "Fashion", "Gaming", "Tech"].map((category) => (
            <Button
              key={category}
              variant="outline"
              className="h-24 flex flex-col items-center justify-center text-center"
            >
              <span className="font-medium">{category}</span>
              <span className="text-sm text-muted-foreground">Explore →</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}