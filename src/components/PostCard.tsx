import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, MessageCircle, MoreHorizontal, Share2, Bookmark, Send } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Comments } from "./Comments"

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
  likes: initialLikes,
  comments: initialComments,
  shares,
  hashtags
}: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(initialLikes)
  const [isSaved, setIsSaved] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const { toast } = useToast()

  const handleLike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1)
    } else {
      setLikes(prev => prev + 1)
    }
    setIsLiked(!isLiked)
    console.log("Like toggled:", !isLiked)
  }

  const handleComment = () => {
    setShowComments(true)
    console.log("Comment section opened")
  }

  const handleShare = () => {
    toast({
      title: "Share",
      description: "Opening share options...",
    })
    console.log("Share clicked")
  }

  const handleSave = () => {
    setIsSaved(!isSaved)
    toast({
      title: isSaved ? "Post removed from saved" : "Post saved",
      description: isSaved ? "The post has been removed from your saved items" : "The post has been saved to your collection",
    })
    console.log("Save toggled:", !isSaved)
  }

  const handleSendDirect = () => {
    toast({
      title: "Send",
      description: "Opening direct message...",
    })
    console.log("Send direct clicked")
  }

  return (
    <>
      <Card className="overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="p-3 flex items-center justify-between border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 ring-2 ring-offset-2 ring-gray-100 dark:ring-gray-700">
            <img src={author.avatar} alt={author.name} className="object-cover" />
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-sm text-gray-900 dark:text-gray-100">{author.name}</span>
              {author.verified && (
                <svg className="h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            {author.username && (
              <span className="text-xs text-gray-500 dark:text-gray-400">@{author.username}</span>
            )}
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>

        <div className="px-3 py-2">
          <p className="text-sm text-gray-800 dark:text-gray-200">{content}</p>
          {hashtags && (
            <div className="mt-2 flex flex-wrap gap-2">
              {hashtags.map((tag) => (
                <span key={tag} className="text-xs text-blue-500 dark:text-blue-400 hover:underline cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {image && (
          <div className="relative aspect-square">
            <img src={image} alt="Post content" className="w-full h-full object-cover" />
          </div>
        )}

        <div className="p-3 flex items-center justify-between border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`flex items-center gap-1 ${
                isLiked 
                  ? "text-red-500 dark:text-red-400" 
                  : "text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
              }`}
              onClick={handleLike}
            >
              <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
              <span className="text-xs font-medium">{likes}</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              onClick={handleComment}
            >
              <MessageCircle className="h-5 w-5" />
              <span className="text-xs font-medium">{initialComments}</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
              onClick={handleShare}
            >
              <Share2 className="h-5 w-5" />
              <span className="text-xs font-medium">{shares}</span>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center gap-1 ${
                isSaved 
                  ? "text-yellow-500 dark:text-yellow-400" 
                  : "text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400"
              }`}
              onClick={handleSave}
            >
              <Bookmark className={`h-5 w-5 ${isSaved ? "fill-current" : ""}`} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              onClick={handleSendDirect}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Card>
      
      <Comments
        postId="1"
        isOpen={showComments}
        onClose={() => setShowComments(false)}
      />
    </>
  )
}
