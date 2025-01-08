"use client";

import { Button } from "@/components/ui/button";
import { RegisterRequestType } from "@/types/auth";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState<RegisterRequestType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rollNumber: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        password: userInfo.password,
        rollNumber: userInfo.rollNumber,
        phone: userInfo.phone,
      });
      console.log("Response from the form request:", response);
      return response;
    } catch (error) {
      console.error("Registration failed from the form request :", error);
    }
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:8000/register", {
  //       firstName: userInfo.firstName,
  //       lastName: userInfo.lastName,
  //       email: userInfo.email,
  //       password: userInfo.password,
  //       rollNumber: userInfo.rollNumber,
  //       phone: userInfo.phone,
  //     });
  //     console.log("Response from the form request:", response);
  //     return response;
  //   } catch (error) {
  //     console.error("Registration failed from the form request :", error);
  //   }
  // };

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
            value={userInfo.firstName}
            onChange={(e) =>
              setUserInfo({ ...userInfo, firstName: e.target.value })
            }
            className="border-2 border-black m-3"
          />
          <input
            type="text"
            placeholder="last name"
            value={userInfo.lastName}
            onChange={(e) =>
              setUserInfo({ ...userInfo, lastName: e.target.value })
            }
            className="border-2 border-black m-3"
          />
          <input
            type="email"
            placeholder="email"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            className="border-2 border-black m-3"
          />
          <input
            type="text"
            placeholder="roll number"
            value={userInfo.rollNumber}
            onChange={(e) =>
              setUserInfo({ ...userInfo, rollNumber: e.target.value })
            }
            className="border-2 border-black m-3"
          />
          <input
            type="text"
            placeholder="phone"
            value={userInfo.phone}
            onChange={(e) =>
              setUserInfo({ ...userInfo, phone: e.target.value })
            }
            className="border-2 border-black m-3"
          />
          <input className="border-2 border-black m-3" />
          <Button type="submit">Submit</Button>
        </form>
      </section>
    </>
  );
};

export default SignUp;
