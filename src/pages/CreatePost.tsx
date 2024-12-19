import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { X, Image as ImageIcon, Globe2 } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"

export default function CreatePost() {
  const [content, setContent] = useState("")
  const navigate = useNavigate()
  const { toast } = useToast()

  const handlePost = () => {
    toast({
      title: "Post created",
      description: "Your post has been published successfully!"
    })
    navigate("/")
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate(-1)}
        >
          <X className="h-5 w-5" />
        </Button>
        <div className="flex gap-4">
          <Button variant="ghost" className="text-blue-500">
            Drafts
          </Button>
          <Button 
            onClick={handlePost}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6"
          >
            Post
          </Button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-4">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10">
            <img 
              src="/placeholder.svg" 
              alt="User avatar" 
              className="rounded-full"
            />
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="What's happening?"
              className="min-h-[120px] border-none text-xl resize-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            {/* Image preview area would go here */}
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="border-t p-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="text-blue-500">
              <ImageIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-blue-500">
              <span className="text-xl font-bold">GIF</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-blue-500">
              <Globe2 className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex items-center gap-4">
            {content.length > 0 && (
              <div className="h-8 w-8 rounded-full border-2 border-blue-500 flex items-center justify-center text-sm text-blue-500">
                {280 - content.length}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}