```js
"use client";

import { Button } from "@/components/ui/button";
import { LoginRequestType } from "@/types/auth";
import axios from "axios";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { useState } from "react";

const LogIn = () => {
  const [userinfo, setUserInfo] = useState<LoginRequestType>({
    email: "",
    password: "",
  });

  // const router = useRouter();

  // const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:8000/login", {
  //       email: userinfo.email,
  //       password: userinfo.password,
  //     });
  //     console.log(response);

  //     if (response.status === 200) {
  //       router.push("/");
  //     }

  //     return response;
  //   } catch (error) {
  //     console.error("Login failed from the form request :", error);
  //   }
  // };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: userinfo.email,
        password: userinfo.password,
      });
      console.log("Response from the login form request:", response);
      return response.data;
    } catch (error) {
      console.error("Login failed from the form request :", error);
    }
  };

  return (
    <>
      <section className="">
        <Link href="/">
          <Button>Back Home</Button>
        </Link>
        <h1 className="text-2xl pt-8">Login Page</h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={userinfo.email}
            onChange={(e) =>
              setUserInfo({ ...userinfo, email: e.target.value })
            }
            className="border-2 border-gray-300 p-2 rounded-md mb-4"
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={userinfo.password}
            onChange={(e) =>
              setUserInfo({ ...userinfo, password: e.target.value })
            }
            className="border-2 border-gray-300 p-2 rounded-md mb-4"
          />
          <br />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
          >
            Login
          </button>
        </form>
      </section>
    </>
  );
};

export default LogIn;

```
