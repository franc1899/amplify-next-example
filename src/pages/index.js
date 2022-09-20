import { useRouter } from "next/router";
import { Auth } from "aws-amplify";
import { useUser } from "../context/AuthContext";

export default function Home() {
  const router = useRouter();
  const { user } = useUser();
  console.log(user);

  async function signOut() {
    try {
        await Auth.signOut();
        router.push("/");
      } catch (error) {
          console.log('error signing out: ', error);
      }
  }

  return (
    <div>
    <div>Hello world!</div>
    <button onClick={() => router.push("/todo")}> Go to ToDo list </button>
    <button onClick={() => router.push("/signup")}> Go to Signup </button>
    <button onClick={() => router.push("/login")}> Go to Login </button>
    <button onClick={signOut}> Logout </button>

    </div>
  )
}
