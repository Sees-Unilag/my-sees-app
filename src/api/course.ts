import { axiosInstance } from "./instance";

export const getAllCourses = async (payload: any) => {
  const params = new URLSearchParams(payload.queryKey[1]);

  const response = await axiosInstance({
    url: `courses?${params}`,
    method: "GET",
    data: {
      semester: "FIRST",
      year: "ONE",
    },
  });

  return response.data;
};
