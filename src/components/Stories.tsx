import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Story {
  username: string
  avatar: string
  isLive?: boolean
}

const stories: Story[] = [
  {
    username: "Irma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=irma",
    isLive: true
  },
  {
    username: "Amanda",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=amanda"
  },
  {
    username: "Luiz",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=luiz"
  },
  {
    username: "Nina",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=nina"
  },
  {
    username: "Izaa",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=izaa"
  },
]

export function Stories() {
  return (
    <div className="w-full py-4 px-4 border-b">
      <div className="flex gap-4 overflow-x-auto no-scrollbar">
        {stories.map((story, index) => (
          <div key={index} className="flex flex-col items-center gap-1 min-w-[72px]">
            <div className="relative">
              <div className={`${story.isLive ? 'p-[2px] bg-gradient-to-tr from-pink-500 to-orange-500 rounded-full' : ''}`}>
                <Avatar className="h-16 w-16 border-2 border-white">
                  <img src={story.avatar} alt={story.username} className="object-cover" />
                </Avatar>
              </div>
              {story.isLive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs px-2 rounded-full">
                  Live
                </span>
              )}
            </div>
            <span className="text-xs text-center truncate w-full">{story.username}</span>
          </div>
        ))}
      </div>
    </div>
  )
}