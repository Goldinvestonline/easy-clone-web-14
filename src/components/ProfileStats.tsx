interface ProfileStatsProps {
  posts: number
  followers: number
  following: number
}

export const ProfileStats = ({ posts, followers, following }: ProfileStatsProps) => {
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num
  }

  return (
    <div className="flex flex-1 justify-around text-center">
      <div>
        <div className="font-semibold">{formatNumber(posts)}</div>
        <div className="text-sm text-muted-foreground">posts</div>
      </div>
      <div>
        <div className="font-semibold">{formatNumber(followers)}</div>
        <div className="text-sm text-muted-foreground">likes</div>
      </div>
      <div>
        <div className="font-semibold">{formatNumber(following)}</div>
        <div className="text-sm text-muted-foreground">media</div>
      </div>
    </div>
  )
}