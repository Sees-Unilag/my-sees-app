import { axiosInstance } from "./instance";

export const getAllCourses = async () => {
  const response = await axiosInstance({
    url: "courses",
    method: "GET",
    data: {
      semester: "FIRST",
      year: "ONE",
    },
  });

  return response.data;
};
