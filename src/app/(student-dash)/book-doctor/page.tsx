// import axios from "axios";

import { createAxiosInstance } from "@/lib/axios";

// const fetchUsers = async () => {
//   try {
//     const res = await axios.get("http://localhost:8000/api/users");
//     return res.data;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//   }
// };

// const fecthCurses = async () => {
//   try {
//     const res = await axios.get("http://localhost:8000/api/courses");
//     return res.data;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//   }
// };

// const testCsrf = async () => {
//   const axiosInstance = createAxiosInstance();
//   try {
//     const response = await axiosInstance.get("/sanctum/csrf-cookie");
//     console.log("CSRF Cookie Set:", response.headers["set-cookie"]);
//   } catch (error) {
//     console.error("CSRF Token Retrieval Failed:", error);
//   }
// };
// testCsrf();

const BookDoctors = async () => {
  // const [users, courses] = await Promise.all([fetchUsers(), fecthCurses()]);
  // console.log(users);
  // console.log("------------------------");
  // console.log(courses);

  return (
    <>
      <h1 className="text-2xl px-10 py-6">Book Doctors</h1>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
};

export default BookDoctors;
