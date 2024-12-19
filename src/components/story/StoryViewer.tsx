import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { DialogContent } from "@/components/ui/dialog"
import { Story } from "./types"

interface StoryViewerProps {
  story: Story
  currentContentIndex: number
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function StoryViewer({ 
  story, 
  currentContentIndex, 
  onClose, 
  onNext, 
  onPrevious 
}: StoryViewerProps) {
  return (
    <DialogContent className="max-w-screen-md w-full h-[80vh] p-0 overflow-hidden">
      <div className="relative h-full bg-black">
        <div className="absolute top-4 right-4 z-10">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-white">
          <Avatar className="h-8 w-8 border-2 border-white">
            <img src={story.avatar} alt={story.username} />
          </Avatar>
          <span className="font-medium">{story.username}</span>
          <span className="text-sm text-white/70">
            {story.content[currentContentIndex].timestamp}
          </span>
        </div>

        <div className="h-full flex items-center justify-center">
          {story.content[currentContentIndex].type === "image" && (
            <img 
              src={story.content[currentContentIndex].url} 
              alt="Story content"
              className="max-h-full w-full object-contain"
            />
          )}
          {story.content[currentContentIndex].type === "text" && (
            <div className="text-white text-2xl font-medium text-center p-8">
              {story.content[currentContentIndex].text}
            </div>
          )}
        </div>

        {currentContentIndex > 0 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
        )}

        {currentContentIndex < story.content.length - 1 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        )}
      </div>
    </DialogContent>
  )
}