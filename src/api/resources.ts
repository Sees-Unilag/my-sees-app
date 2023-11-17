import { axiosInstance } from "./instance";

export const getAllResource = async (payload: any) => {
 const params = payload.queryKey[1]
 const id = params.Id


 const response = await axiosInstance({
  url: `courses/${id}`,
  method: "GET",
 })
 return response.data;
}