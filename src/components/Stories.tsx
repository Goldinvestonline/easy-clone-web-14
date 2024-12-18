import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Plus } from "lucide-react"

interface Story {
  username: string
  avatar: string
  hasStory?: boolean
}

const stories: Story[] = [
  {
    username: "Your story",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=your",
    hasStory: false
  },
  {
    username: "its_ampurire",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=amp",
    hasStory: true
  },
  {
    username: "_____kevo___",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=kev",
    hasStory: true
  },
  {
    username: "beatricekarungi7",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=bea",
    hasStory: true
  },
]

export function Stories() {
  return (
    <div className="relative w-full py-4 border-b">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {stories.map((story, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-[4.5rem]">
              <div className="flex flex-col items-center gap-1">
                <div className={`relative cursor-pointer ${
                  story.hasStory ? 'p-[2px] bg-gradient-to-tr from-[#FFC107] via-[#F44336] to-[#FF5722] rounded-full' : ''
                }`}>
                  <Avatar className={`h-14 w-14 ${!story.hasStory ? 'border-2 border-border' : 'border-[3px] border-background'}`}>
                    <img src={story.avatar} alt={story.username} className="object-cover" />
                    {!story.hasStory && (
                      <Button 
                        size="icon" 
                        className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-2 border-background bg-blue-500 hover:bg-blue-600 p-0"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    )}
                  </Avatar>
                </div>
                <span className="text-xs truncate w-[4.5rem] text-center">{story.username}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}