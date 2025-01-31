import axios from "axios";

export const fetchCourse = async (id: string) => {
  try {
    const response = await axios.get(
      `http:///localhost:8000/api/courses/${id}`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error fetching course:", error);
  }
};

export const fetchEnrollCourse = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/courses/${id}`);
    const data = await response.data;
    // console.log("Course Data",data);
    return data;
  } catch (error) {
    console.log("Error fetching enrollCourse:", error);
  }
};
