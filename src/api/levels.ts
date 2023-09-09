import { axiosInstance } from "./instance";

export const getAllLevels = async () => {
  const response = await axiosInstance({
    url: "levels",
    method: "GET",
  });

  return response.data;
};

export const examplePost = async (payload: any) => {
  const response = await axiosInstance({
    url: "levels",
    method: "POST",
    data: payload,
  });

  return response.data;
};
