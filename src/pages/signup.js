import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../context/AuthContext";
import { Auth } from "aws-amplify";
//import { CognitoUser } from "@aws-amplify/auth";
import { useRouter } from "next/router";


export default function Signup() {
  const { user } = useUser();
  const router = useRouter();
  const [signUpError, setSignUpError] = useState("");
  const [showCode, setShowCode] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    console.log(signUpError)
  }, [signUpError])

  const onSubmit = async (data) => {
    try {
      if (showCode) {
        confirmSignUp(data);
      } else {
        await signUpWithEmailAndPassword(data);
        setShowCode(true);
      }
    } catch (err) {
      console.error(err);
      setSignUpError(err.message);
    }
  };

  async function signUpWithEmailAndPassword(
    data
  ) {
    const { username, password, email } = data;
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      console.log("Signed up a user:", user);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async function confirmSignUp(data) {
    const { username, password, code } = data;
    try {
      await Auth.confirmSignUp(username, code);
      const amplifyUser = await Auth.signIn(username, password);
      console.log("Successs, singed in a user", amplifyUser);
      if (amplifyUser) {
        router.push(`/`);
      } else {
        throw new Error("Something went wrong :'(");
      }
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }

  console.log("The value of the user from the hook is:", user);

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
       
        <label>Username</label>
        <input {...register("username")} />
        <label>Email</label>
        <input {...register("email")} />
        <label>Password</label>
        <input {...register("password")} />

        {showCode && (
          <div>
          <label>Verification Code</label>
          <input {...register("code")} />
          </div>
        )}
        <button type="submit">
          {showCode ? "Confirm Code" : "Sign Up"}
        </button>
    </form>
  );
}