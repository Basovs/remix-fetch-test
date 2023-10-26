import { Link } from "@remix-run/react"

export const Navbar = () => {
  return (
    <div className="flex gap-4 p-2">
      <Link to="random-user-1" className="py-2 px-4 bg-blue-400">
        RandomUser 1
      </Link>

      <Link to="random-user-2" className="py-2 px-4 bg-blue-400">
        RandomUser 2
      </Link>

      <Link to="random-user-3" className="py-2 px-4 bg-blue-400">
        RandomUser 3
      </Link>
    </div>
  )
}
