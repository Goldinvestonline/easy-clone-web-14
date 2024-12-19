import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, MessageCircle, MoreHorizontal, Share2 } from "lucide-react"

interface Author {
  name: string
  avatar: string
  verified?: boolean
  username?: string
}

interface PostCardProps {
  author: Author
  content: string
  image?: string
  timestamp: string
  likes: number
  comments: number
  shares?: number
  hashtags?: string[]
}

export function PostCard({
  author,
  content,
  image,
  timestamp,
  likes,
  comments,
  shares,
  hashtags
}: PostCardProps) {
  return (
    <Card className="overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 ring-2 ring-offset-2 ring-gray-100 dark:ring-gray-700">
            <img src={author.avatar} alt={author.name} className="object-cover" />
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-900 dark:text-gray-100">{author.name}</span>
              {author.verified && (
                <svg className="h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            {author.username && (
              <span className="text-sm text-gray-500 dark:text-gray-400">@{author.username}</span>
            )}
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>

      {/* Content */}
      <div className="px-4 py-3">
        <p className="text-gray-800 dark:text-gray-200">{content}</p>
        {hashtags && (
          <div className="mt-2 flex flex-wrap gap-2">
            {hashtags.map((tag) => (
              <span key={tag} className="text-blue-500 dark:text-blue-400 text-sm hover:underline cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Image */}
      {image && (
        <div className="relative aspect-square">
          <img src={image} alt="Post content" className="w-full h-full object-cover" />
        </div>
      )}

      {/* Footer */}
      <div className="p-4 flex items-center justify-between border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-6">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
          >
            <Heart className="h-5 w-5" />
            <span className="font-medium">{likes}</span>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">{comments}</span>
          </Button>
          {shares !== undefined && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
            >
              <Share2 className="h-5 w-5" />
              <span className="font-medium">{shares}</span>
            </Button>
          )}
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">{timestamp}</span>
      </div>
    </Card>
  )
}