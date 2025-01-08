"use client";
import { Button } from "@/components/ui/button";
import { RegisterRequestType } from "@/types/auth";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState<RegisterRequestType>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/signup", userInfo, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
      });

      if (response.status === 201) {
        console.log("Registration successful");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <>
      <section className="">
        <Link href="/">
          <Button>Back Home</Button>
        </Link>
        <h1 className="text-2xl pt-8">SignUp Page</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="first name"
            onChange={(e) =>
              setUserInfo({ ...userInfo, firstname: e.target.value })
            }
            className="border-2 border-black m-3"
          />
          <input
            type="text"
            placeholder="last name"
            onChange={(e) =>
              setUserInfo({ ...userInfo, lastname: e.target.value })
            }
            className="border-2 border-black m-3"
          />
          <input
            type="email"
            placeholder="email"
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            className="border-2 border-black m-3"
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
            className="border-2 border-black m-3"
          />
          <Button type="submit">Submit</Button>
        </form>
      </section>
    </>
  );
};

export default SignUp;
