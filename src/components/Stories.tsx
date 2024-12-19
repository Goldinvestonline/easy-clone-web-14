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
    <div className="w-full py-6 px-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="flex gap-6 overflow-x-auto no-scrollbar">
        {stories.map((story, index) => (
          <div key={index} className="flex flex-col items-center gap-2 min-w-[80px]">
            <div className="relative cursor-pointer transform hover:scale-105 transition-transform duration-200">
              <div className={`${
                story.isLive 
                  ? 'p-1 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full' 
                  : 'p-1 bg-gradient-to-tr from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded-full'
              }`}>
                <Avatar className="h-16 w-16 border-2 border-white dark:border-gray-800">
                  <img src={story.avatar} alt={story.username} className="object-cover" />
                </Avatar>
              </div>
              {story.isLive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                  Live
                </span>
              )}
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate w-full text-center">
              {story.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}