import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AgoraRTCProvider, useRTCClient, useJoin, useLocalCameraTrack, useLocalMicrophoneTrack } from "agora-rtc-react"

const config = {
  appId: "YOUR_APP_ID", // You'll need to replace this with your Agora App ID
  channel: "test",
  token: null // Use null for testing. In production, you should use a token server
}

const LiveStream = () => {
  const { toast } = useToast()
  const [channelName, setChannelName] = useState("")
  const [inCall, setInCall] = useState(false)
  
  const client = useRTCClient()
  const { isLoading: isLoadingMic } = useLocalMicrophoneTrack()
  const { isLoading: isLoadingCam } = useLocalCameraTrack()
  const { join, leave } = useJoin(client)

  const startCall = async () => {
    if (!channelName) {
      toast({
        title: "Error",
        description: "Please enter a channel name",
        variant: "destructive"
      })
      return
    }

    try {
      await join(config.appId, channelName, config.token)
      setInCall(true)
      toast({
        title: "Connected",
        description: "You've joined the stream"
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to join the stream",
        variant: "destructive"
      })
    }
  }

  const endCall = async () => {
    try {
      await leave()
      setInCall(false)
      toast({
        title: "Call ended",
        description: "You've left the stream"
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to leave the stream",
        variant: "destructive"
      })
    }
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
              disabled={!channelName || isLoadingMic || isLoadingCam}
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
                  Local Video
                </div>
              </div>
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  Remote Video
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

const Live = () => (
  <AgoraRTCProvider client={useRTCClient()}>
    <LiveStream />
  </AgoraRTCProvider>
)

export default Live