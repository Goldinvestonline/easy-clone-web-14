import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import AgoraRTC from "agora-rtc-sdk-ng"
import { 
  AgoraRTCProvider,
  useRTCClient,
  useJoinClient,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  type IAgoraRTCRemoteUser
} from "agora-rtc-react"

const client = AgoraRTC.createClient({ codec: "vp8", mode: "rtc" })

const LiveStream = () => {
  const { toast } = useToast()
  const [channelName, setChannelName] = useState("")
  const [inCall, setInCall] = useState(false)
  const [users, setUsers] = useState<IAgoraRTCRemoteUser[]>([])

  const agoraClient = useRTCClient(client, {
    role: "host"
  })
  
  const { isLoading: isLoadingCam, localCameraTrack } = useLocalCameraTrack()
  const { isLoading: isLoadingMic, localMicrophoneTrack } = useLocalMicrophoneTrack()
  
  const { 
    isConnected,
    join: joinChannel,
    leave: leaveChannel
  } = useJoinClient(agoraClient, {
    appid: "167ba6c3748b43b8b44e986a74823223",
    channel: channelName,
    token: null // Using null for testing mode
  })

  const { publish } = usePublish(agoraClient)

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
      if (localCameraTrack && localMicrophoneTrack) {
        await joinChannel()
        await publish([localCameraTrack, localMicrophoneTrack])
        setInCall(true)
        toast({
          title: "Connected",
          description: "You've joined the stream"
        })
      }
    } catch (error) {
      console.error(error)
      toast({
        title: "Error joining stream",
        description: "Failed to join the stream. Please try again.",
        variant: "destructive"
      })
    }
  }

  const endCall = async () => {
    try {
      await leaveChannel()
      setInCall(false)
      setUsers([])
      toast({
        title: "Call ended",
        description: "You've left the stream"
      })
    } catch (error) {
      console.error(error)
      toast({
        title: "Error leaving stream",
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
              disabled={isLoadingCam || isLoadingMic || !channelName}
              className="w-full"
            >
              Join Stream
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Local video */}
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <div id="local-video" className="absolute inset-0"></div>
              </div>
              
              {/* Remote videos */}
              {users.map((user) => (
                <div 
                  key={user.uid}
                  className="relative aspect-video bg-black rounded-lg overflow-hidden"
                >
                  <div id={`remote-video-${user.uid}`} className="absolute inset-0"></div>
                </div>
              ))}
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
  <AgoraRTCProvider client={client}>
    <LiveStream />
  </AgoraRTCProvider>
)

export default Live