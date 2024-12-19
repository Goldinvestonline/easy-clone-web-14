import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pencil } from "lucide-react"

interface Story {
  username: string
  avatar: string
  image: string
  verified?: boolean
}

const stories: Story[] = [
  {
    username: "LOLA BUN...",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lola",
    image: "/lovable-uploads/9d143ddb-c1ee-401e-b3f2-1a9381e95024.png",
    verified: true
  },
  {
    username: "Ebony Ta...",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ebony",
    image: "/lovable-uploads/9d143ddb-c1ee-401e-b3f2-1a9381e95024.png",
    verified: true
  },
  {
    username: "Amara ...",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=amara",
    image: "/lovable-uploads/9d143ddb-c1ee-401e-b3f2-1a9381e95024.png",
    verified: true
  },
]

export function Stories() {
  return (
    <div className="w-full space-y-4 py-4 border-b">
      <div className="flex items-center gap-2 px-4">
        <Tabs defaultValue="all" className="flex-1">
          <TabsList className="h-9 w-fit bg-muted/50">
            <TabsTrigger value="all" className="text-base px-6">
              All
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Pencil className="h-5 w-5" />
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-2 px-4">
        {stories.map((story, index) => (
          <div key={index} className="relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer group">
            <img 
              src={story.image} 
              alt={story.username} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
            <div className="absolute bottom-3 left-3 right-3">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border-2 border-white">
                  <img src={story.avatar} alt={story.username} />
                </Avatar>
                <div className="flex items-center gap-1">
                  <span className="text-white font-semibold text-sm">
                    {story.username}
                  </span>
                  {story.verified && (
                    <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}