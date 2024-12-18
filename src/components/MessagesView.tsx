import { Avatar } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  sender: {
    name: string
    avatar: string
  }
  lastMessage: string
  timestamp: string
  unread?: boolean
}

interface MessagesViewProps {
  messages: Message[]
}

export const MessagesView = ({ messages }: MessagesViewProps) => {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="space-y-2 p-4">
        {messages.map((message) => (
          <Card key={message.id} className={`p-4 hover:bg-accent cursor-pointer ${message.unread ? 'bg-accent/50' : ''}`}>
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <img src={message.sender.avatar} alt={message.sender.name} />
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold truncate">{message.sender.name}</h4>
                  <span className="text-sm text-muted-foreground">{message.timestamp}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">{message.lastMessage}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </ScrollArea>
  )
}