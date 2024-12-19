import { useState } from "react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Comment {
  id: string
  author: {
    name: string
    username: string
    avatar: string
    verified?: boolean
  }
  content: string
  timestamp: string
  likes: number
}

interface CommentsProps {
  postId: string
  isOpen: boolean
  onClose: () => void
}

export function Comments({ postId, isOpen, onClose }: CommentsProps) {
  const [newComment, setNewComment] = useState("")
  const [comments] = useState<Comment[]>([
    {
      id: "1",
      author: {
        name: "sherii_finesse",
        username: "sherii_finesse",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sherii",
        verified: false
      },
      content: "Wrong one definitely the better one😂",
      timestamp: "2w",
      likes: 1534
    },
    {
      id: "2",
      author: {
        name: "martinlopezjrof",
        username: "martinlopezjrof",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=martin",
        verified: false
      },
      content: "❤️❤️❤️❤️❤️",
      timestamp: "2w",
      likes: 2
    },
    // Add more sample comments as needed
  ])

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return
    
    console.log("New comment submitted:", newComment)
    setNewComment("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Comments</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col space-y-4 max-h-[60vh] overflow-y-auto">
          {comments.map((comment) => (
            <div key={comment.id} className="flex space-x-3">
              <Avatar className="h-8 w-8">
                <img src={comment.author.avatar} alt={comment.author.name} className="object-cover" />
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm">{comment.author.name}</span>
                  <span className="text-xs text-gray-500">{comment.timestamp}</span>
                </div>
                <p className="text-sm text-gray-800 dark:text-gray-200">{comment.content}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Heart className="h-4 w-4" />
                    <span className="ml-1 text-xs">{comment.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                    Reply
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmitComment} className="flex items-center gap-2 mt-4 pt-4 border-t">
          <Input
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="sm">
            Post
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}