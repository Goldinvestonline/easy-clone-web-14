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
    <Card className="overflow-hidden bg-white">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <img src={author.avatar} alt={author.name} className="object-cover" />
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-semibold">{author.name}</span>
              {author.verified && (
                <svg className="h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            {author.username && (
              <span className="text-sm text-gray-500">@{author.username}</span>
            )}
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <p className="text-sm">{content}</p>
        {hashtags && (
          <div className="mt-2 flex flex-wrap gap-2">
            {hashtags.map((tag) => (
              <span key={tag} className="text-blue-500 text-sm">
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
      <div className="p-4 flex items-center justify-between border-t">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <span>{comments}</span>
          </Button>
          {shares !== undefined && (
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              <span>{shares}</span>
            </Button>
          )}
        </div>
        <span className="text-sm text-gray-500">{timestamp}</span>
      </div>
    </Card>
  )
}