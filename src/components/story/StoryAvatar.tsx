import { Avatar } from "@/components/ui/avatar"

interface StoryAvatarProps {
  username: string
  avatar: string
  isLive?: boolean
  onClick: () => void
}

export function StoryAvatar({ username, avatar, onClick }: StoryAvatarProps) {
  return (
    <div 
      className="flex flex-col items-center gap-1 min-w-[64px]"
      onClick={onClick}
    >
      <div className="relative cursor-pointer transform hover:scale-105 transition-transform duration-200">
        <div className="p-0.5 bg-gradient-to-tr from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded-full">
          <Avatar className="h-14 w-14 border-2 border-white dark:border-gray-800">
            <img src={avatar} alt={username} className="object-cover" />
          </Avatar>
        </div>
      </div>
      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate w-full text-center">
        {username}
      </span>
    </div>
  )
}