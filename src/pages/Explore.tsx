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
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search creators, users, or content..."
              className="pl-10 bg-muted/40"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Stories Section */}
        <div className="px-4 py-4">
          <Stories />
        </div>

        {/* Popular Creators Section */}
        <div className="px-4 py-6 space-y-6">
          <h2 className="font-semibold text-lg text-foreground">Popular Creators</h2>
          <div className="space-y-4">
            {mockCreators.map((creator) => (
              <div key={creator.id} className="flex items-center justify-between bg-card rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 ring-2 ring-primary/10">
                    <img src={creator.avatar} alt={creator.name} className="object-cover" />
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium text-foreground">{creator.name}</span>
                      {creator.isVerified && (
                        <svg className="h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{creator.bio}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Intl.NumberFormat().format(creator.followers)} followers
                    </p>
                  </div>
                </div>
                <Button 
                  variant="secondary" 
                  className="rounded-full hover:bg-primary hover:text-primary-foreground"
                >
                  Follow
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="px-4 py-6">
          <h2 className="font-semibold text-lg text-foreground mb-4">Explore Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Art & Design", color: "from-purple-500 to-pink-500" },
              { name: "Music", color: "from-blue-500 to-cyan-500" },
              { name: "Photography", color: "from-orange-500 to-red-500" },
              { name: "Fashion", color: "from-pink-500 to-rose-500" },
              { name: "Gaming", color: "from-green-500 to-emerald-500" },
              { name: "Tech", color: "from-indigo-500 to-purple-500" }
            ].map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className={`h-24 flex flex-col items-center justify-center text-center relative overflow-hidden group`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${category.color} transition-opacity`} />
                <span className="font-medium text-foreground">{category.name}</span>
                <span className="text-sm text-muted-foreground mt-1">Explore →</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}