import { useState } from "react"
import { Dialog } from "@/components/ui/dialog"
import { StoryAvatar } from "./story/StoryAvatar"
import { StoryViewer } from "./story/StoryViewer"
import { Story } from "./story/types"

const stories: Story[] = [
  {
    username: "Irma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=irma",
    isLive: true,
    content: [
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
        type: "text",
        text: "Check out my latest post!",
        timestamp: "3 hours ago"
      }
    ]
  },
  {
    username: "Luiz",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=luiz",
    content: [
      {
        type: "text",
        text: "New content coming soon!",
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
        type: "text",
        text: "Working on something exciting!",
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
            <StoryAvatar
              key={index}
              username={story.username}
              avatar={story.avatar}
              isLive={story.isLive}
              onClick={() => handleStoryClick(story)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedStory} onOpenChange={() => handleClose()}>
        {selectedStory && (
          <StoryViewer
            story={selectedStory}
            currentContentIndex={currentContentIndex}
            onClose={handleClose}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
      </Dialog>
    </>
  )
}