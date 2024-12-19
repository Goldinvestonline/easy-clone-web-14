import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Live = () => {
  const { toast } = useToast()
  const [channelName, setChannelName] = useState("")
  const [inCall, setInCall] = useState(false)

  const startCall = async () => {
    if (!channelName) {
      toast({
        title: "Error",
        description: "Please enter a channel name",
        variant: "destructive"
      })
      return
    }

    setInCall(true)
    toast({
      title: "Connected",
      description: "You've joined the stream"
    })
  }

  const endCall = async () => {
    setInCall(false)
    toast({
      title: "Call ended",
      description: "You've left the stream"
    })
  }

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Live Stream</h1>
        
        {!inCall ? (
          <div className="space-y-4">
            <Input
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
              placeholder="Enter channel name..."
              className="mb-4"
            />
            <Button 
              onClick={startCall}
              disabled={!channelName}
              className="w-full"
            >
              Join Stream
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  Video placeholder
                </div>
              </div>
            </div>
            
            <Button 
              onClick={endCall}
              variant="destructive"
              className="w-full"
            >
              End Stream
            </Button>
          </div>
        )}
      </Card>
    </div>
  )
}

export default Live