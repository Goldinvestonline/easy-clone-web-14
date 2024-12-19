import { useState } from "react"
import { Avatar } from "@/components/ui/avatar"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface Story {
  username: string
  avatar: string
  isLive?: boolean
  content?: {
    type: "image" | "video" | "text"
    url?: string
    text?: string
    timestamp: string
  }[]
}

const stories: Story[] = [
  {
    username: "Irma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=irma",
    isLive: true,
    content: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
        timestamp: "2 hours ago"
      },
      {
        type: "text",
        text: "Having an amazing day! 🌟",
        timestamp: "1 hour ago"
      }
    ]
  },
  {
    username: "Amanda",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=amanda",
    content: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1501286353178-1ec881214838",
        timestamp: "3 hours ago"
      }
    ]
  },
  {
    username: "Luiz",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=luiz",
    content: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
        timestamp: "5 hours ago"
      }
    ]
  },
  {
    username: "Nina",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=nina",
    content: [
      {
        type: "text",
        text: "Just finished my workout! 💪",
        timestamp: "1 hour ago"
      }
    ]
  },
  {
    username: "Izaa",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=izaa",
    content: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
        timestamp: "6 hours ago"
      }
    ]
  },
]

export function Stories() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)
  const [currentContentIndex, setCurrentContentIndex] = useState(0)

  const handleStoryClick = (story: Story) => {
    setSelectedStory(story)
    setCurrentContentIndex(0)
    console.log("Opening story for:", story.username)
  }

  const handleClose = () => {
    setSelectedStory(null)
    setCurrentContentIndex(0)
    console.log("Closing story viewer")
  }

  const handleNext = () => {
    if (selectedStory?.content && currentContentIndex < selectedStory.content.length - 1) {
      setCurrentContentIndex(prev => prev + 1)
      console.log("Moving to next story content")
    } else {
      handleClose()
    }
  }

  const handlePrevious = () => {
    if (currentContentIndex > 0) {
      setCurrentContentIndex(prev => prev - 1)
      console.log("Moving to previous story content")
    }
  }

  return (
    <>
      <div className="w-full py-4 px-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {stories.map((story, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-1 min-w-[64px]"
              onClick={() => handleStoryClick(story)}
            >
              <div className="relative cursor-pointer transform hover:scale-105 transition-transform duration-200">
                <div className={`${
                  story.isLive 
                    ? 'p-0.5 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full' 
                    : 'p-0.5 bg-gradient-to-tr from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded-full'
                }`}>
                  <Avatar className="h-14 w-14 border-2 border-white dark:border-gray-800">
                    <img src={story.avatar} alt={story.username} className="object-cover" />
                  </Avatar>
                </div>
                {story.isLive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                    Live
                  </span>
                )}
              </div>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate w-full text-center">
                {story.username}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedStory} onOpenChange={() => handleClose()}>
        <DialogContent className="max-w-screen-md w-full h-[80vh] p-0 overflow-hidden">
          {selectedStory && selectedStory.content && (
            <div className="relative h-full bg-black">
              <div className="absolute top-4 right-4 z-10">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={handleClose}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-white">
                <Avatar className="h-8 w-8 border-2 border-white">
                  <img src={selectedStory.avatar} alt={selectedStory.username} />
                </Avatar>
                <span className="font-medium">{selectedStory.username}</span>
                <span className="text-sm text-white/70">
                  {selectedStory.content[currentContentIndex].timestamp}
                </span>
              </div>

              <div className="h-full flex items-center justify-center">
                {selectedStory.content[currentContentIndex].type === "image" && (
                  <img 
                    src={selectedStory.content[currentContentIndex].url} 
                    alt="Story content"
                    className="max-h-full w-full object-contain"
                  />
                )}
                {selectedStory.content[currentContentIndex].type === "text" && (
                  <div className="text-white text-2xl font-medium text-center p-8">
                    {selectedStory.content[currentContentIndex].text}
                  </div>
                )}
              </div>

              {currentContentIndex > 0 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
              )}

              {currentContentIndex < selectedStory.content.length - 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}