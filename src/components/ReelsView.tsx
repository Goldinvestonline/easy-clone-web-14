import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card } from "@/components/ui/card"

interface Reel {
  id: string
  videoUrl: string
  caption: string
  author: string
  likes: number
  comments: number
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

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="font-bold">{reel.author}</h3>
              <p className="text-sm line-clamp-2">{reel.caption}</p>
              
              <div className="flex items-center gap-4 mt-2">
                <span className="flex items-center gap-1">
                  ❤️ {reel.likes}
                </span>
                <span className="flex items-center gap-1">
                  💬 {reel.comments}
                </span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}