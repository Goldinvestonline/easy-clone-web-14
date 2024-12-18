import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"

interface SuggestedUser {
  id: number
  username: string
  avatar: string
  subtitle: string
}

interface SuggestedUsersProps {
  users: SuggestedUser[]
}

export const SuggestedUsers = ({ users }: SuggestedUsersProps) => {
  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Discover people</h2>
        <Button variant="link" className="text-blue-600 font-semibold p-0">
          See all
        </Button>
      </div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4">
        {users.map((user) => (
          <Card key={user.id} className="flex-none w-[150px] p-3 relative">
            <Button 
              size="icon"
              variant="ghost"
              className="absolute right-2 top-2 h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
            <div className="flex flex-col items-center text-center gap-2">
              <Avatar className="h-14 w-14">
                <img src={user.avatar} alt={user.username} className="object-cover" />
              </Avatar>
              <div className="font-semibold text-sm">{user.username}</div>
              <div className="text-xs text-muted-foreground">{user.subtitle}</div>
              <Button className="w-full" variant="default">
                Follow
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}