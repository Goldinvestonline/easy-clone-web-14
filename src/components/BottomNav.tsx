import { Home, Search, PlusSquare, UserCircle } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export function BottomNav() {
  const location = useLocation()

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Search, label: "Explore", path: "/explore" },
    { icon: PlusSquare, label: "Create", path: "/create" },
    { icon: UserCircle, label: "Profile", path: "/profile" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t bg-background px-4 md:hidden">
      {menuItems.map((item) => (
        <Link
          key={item.label}
          to={item.path}
          className={`flex flex-col items-center justify-center ${
            location.pathname === item.path ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <item.icon className="h-6 w-6" />
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}