import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUser } from "../context/AuthContext";
import { Auth } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";
import { useRouter } from "next/router";


export default function Login() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [signInError, setSignInError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await Auth.signIn(data.username, data.password);
      router.push(`/`);
    } catch (error) {
      console.error(error);
      setSignInError(error.message);
      setOpen(true);
    }
  };

  useEffect(() => {
    console.log(signInError)
    console.log(open)
  }, [signInError, open]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <label>Username</label>
            <input {...register("username")} />

            <label>Password</label>
            <input {...register("password")} />

            <button type="submit">
              Sign In
            </button>
      </form>
    </>
  );
}