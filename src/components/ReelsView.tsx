import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Heart, MessageCircle, MoreHorizontal, Music2 } from "lucide-react"

interface Reel {
  id: string
  videoUrl: string
  caption: string
  author: string
  likes: number
  comments: number
  audioTitle?: string
  userAvatar?: string
}

interface ReelsViewProps {
  reels: Reel[]
}

export const ReelsView = ({ reels }: ReelsViewProps) => {
  return (
    <div className="max-w-[1080px] mx-auto space-y-4">
      {reels.map((reel) => (
        <Card key={reel.id} className="overflow-hidden bg-black">
          <div className="relative">
            <AspectRatio ratio={9/16} className="bg-muted">
              <video
                className="h-full w-full object-cover"
                src={reel.videoUrl}
                controls
                playsInline
                loop
                preload="metadata"
              />
            </AspectRatio>
            
            {/* Text safe area overlay - only visible during development */}
            <div className="absolute inset-0 pointer-events-none opacity-10 hidden md:block">
              <div className="h-[220px] bg-red-500/20" /> {/* Top buffer */}
              <div className="h-[1280px] w-[1010px] mx-auto border border-dashed border-white/50" /> {/* Safe area */}
              <div className="h-[420px] bg-red-500/20" /> {/* Bottom buffer */}
            </div>

            {/* Right side actions */}
            <div className="absolute right-4 bottom-20 flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-1">
                <Button size="icon" variant="ghost" className="text-white hover:text-white/90">
                  <Heart className="w-7 h-7" />
                </Button>
                <span className="text-white text-sm font-medium">{reel.likes}</span>
              </div>
              
              <div className="flex flex-col items-center gap-1">
                <Button size="icon" variant="ghost" className="text-white hover:text-white/90">
                  <MessageCircle className="w-7 h-7" />
                </Button>
                <span className="text-white text-sm font-medium">{reel.comments}</span>
              </div>
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-4 left-4 right-16 text-white">
              {/* Author info */}
              <div className="flex items-center gap-2 mb-4">
                <Avatar className="h-8 w-8">
                  {reel.userAvatar && <img src={reel.userAvatar} alt={reel.author} />}
                </Avatar>
                <span className="font-semibold">{reel.author}</span>
                <Button variant="secondary" size="sm" className="ml-2 text-xs h-8">
                  Follow
                </Button>
              </div>

              {/* Caption */}
              <p className="text-sm line-clamp-2 mb-4">{reel.caption}</p>
              
              {/* Audio info */}
              {reel.audioTitle && (
                <div className="flex items-center gap-2 text-sm">
                  <Music2 className="w-4 h-4" />
                  <span className="font-medium">{reel.audioTitle}</span>
                </div>
              )}
            </div>

            {/* Top right menu */}
            <Button 
              size="icon" 
              variant="ghost" 
              className="absolute top-4 right-4 text-white hover:text-white/90"
            >
              <MoreHorizontal className="w-6 h-6" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}