import { useLoaderData } from "@remix-run/react"

export async function loader() {
  const res = await fetch(
    "https://random-data-api.com/api/users/random_user",
    {}
  )

  const data = await res.json()

  return data
}

export default function RandomUser2() {
  const randomUser = useLoaderData<{ first_name: string; last_name: string }>()

  return (
    <div>
      <h1 className="text-4xl font-bold">Random user 2</h1>

      <div className="flex gap-2 text-2xl font-medium text-lime-500">
        <p>{randomUser.first_name}</p>
        <p>{randomUser.last_name}</p>
      </div>
    </div>
  )
}
