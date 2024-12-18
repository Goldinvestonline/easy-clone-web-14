interface ProfileStatsProps {
  posts: number
  followers: number
  following: number
}

export const ProfileStats = ({ posts, followers, following }: ProfileStatsProps) => {
  return (
    <div className="flex flex-1 justify-around text-center">
      <div>
        <div className="font-semibold">{posts}</div>
        <div className="text-sm text-muted-foreground">posts</div>
      </div>
      <div>
        <div className="font-semibold">{followers}</div>
        <div className="text-sm text-muted-foreground">followers</div>
      </div>
      <div>
        <div className="font-semibold">{following}</div>
        <div className="text-sm text-muted-foreground">following</div>
      </div>
    </div>
  )
}