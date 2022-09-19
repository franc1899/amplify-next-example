import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter();

  return (
    <div>
    <div>Hello world!</div>
    <button onClick={() => router.push("/todo")}> Go to ToDo list </button>
    <button onClick={() => router.push("/signup")}> Go to Signup </button>
    <button onClick={() => router.push("/login")}> Go to Login </button>
    </div>
  )
}
