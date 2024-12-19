import { useEffect, useState } from "react"
import { io, Socket } from "socket.io-client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Card } from "@/components/ui/card"

const Live = () => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<string[]>([])
  const { toast } = useToast()

  useEffect(() => {
    // Replace this URL with your Socket.io server URL when you have one
    const newSocket = io("http://localhost:3000")
    
    newSocket.on("connect", () => {
      toast({
        title: "Connected to chat",
        description: "You're now connected to the live chat"
      })
    })

    newSocket.on("message", (message: string) => {
      setMessages((prev) => [...prev, message])
    })

    newSocket.on("disconnect", () => {
      toast({
        title: "Disconnected",
        description: "You've been disconnected from the chat",
        variant: "destructive"
      })
    })

    setSocket(newSocket)

    return () => {
      newSocket.close()
    }
  }, [])

  const sendMessage = () => {
    if (socket && message.trim()) {
      socket.emit("message", message)
      setMessage("")
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Live Chat</h1>
        
        <div className="h-[400px] overflow-y-auto mb-4 p-4 border rounded-lg">
          {messages.map((msg, index) => (
            <div key={index} className="mb-2 p-2 bg-accent rounded-lg">
              {msg}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </Card>
    </div>
  )
}

export default Live