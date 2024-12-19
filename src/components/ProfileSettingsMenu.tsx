import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  Settings,
  Star,
  User,
  CreditCard,
  Building2,
  HelpCircle,
  Moon,
  Globe,
  LogOut,
} from "lucide-react"
import { useEffect, useState } from "react"

export function ProfileSettingsMenu() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if dark mode is already enabled
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true)
    }
  }, [])

  const toggleDarkMode = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Settings className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[240px]">
        <DropdownMenuItem className="gap-2 h-11">
          <User className="h-5 w-5" />
          <span>My profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2 h-11">
          <Star className="h-5 w-5" />
          <span>Collections</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2 h-11">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 h-11">
          <CreditCard className="h-5 w-5" />
          <span>Your cards</span>
          <span className="ml-auto text-muted-foreground text-sm">to subscribe</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2 h-11">
          <Building2 className="h-5 w-5" />
          <span>Become a creator</span>
          <span className="ml-auto text-muted-foreground text-sm">to earn</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 h-11">
          <HelpCircle className="h-5 w-5" />
          <span>Help and support</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2 h-11" onClick={toggleDarkMode}>
          <Moon className="h-5 w-5" />
          <span>Dark mode</span>
          <span className="ml-auto text-muted-foreground text-sm">{isDark ? 'On' : 'Off'}</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2 h-11">
          <Globe className="h-5 w-5" />
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 h-11 text-red-600">
          <LogOut className="h-5 w-5" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}