"use client";

import { getCookie } from "cookies-next";
import { useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";

const Test = () => {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");

  const user = getCookie("user");
  const currentUser = user ? JSON.parse(user as string) : null;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/register", {
        file,
      });

      if (response.status === 200) {
        alert("File uploaded successfully");
      } else {
        alert("Error uploading file");
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const data = await response.data;
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
      alert("Error uploading file");
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-x-3">
        <label>
          Select a file:
          <input type="file" onChange={handleFileChange} className="border" />
        </label>
        {/* <label>
          Select a file:
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            className="border"
          />
        </label> */}
        <Button type="submit">Upload</Button>
      </form>
    </>
  );
};

export default Test;
