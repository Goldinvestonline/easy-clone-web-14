import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
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
    <div className="relative w-full py-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {stories.map((story, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-20">
              <div className="flex flex-col items-center gap-1">
                <div className={`relative cursor-pointer ${
                  story.hasStory ? 'p-[2px] bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full' : ''
                }`}>
                  <Avatar className="h-16 w-16 border-2 border-background">
                    <img src={story.avatar} alt={story.username} className="object-cover" />
                    {!story.hasStory && (
                      <Button 
                        size="icon" 
                        className="absolute bottom-0 right-0 h-6 w-6 rounded-full border-2 border-background bg-primary hover:bg-primary/90"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    )}
                  </Avatar>
                </div>
                <span className="text-xs truncate max-w-16">{story.username}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  )
}