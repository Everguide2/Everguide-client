import {axiosInstance} from "@apis/axiosInstance.js";

export const getTest = async () => {
  try{
    const response = await axiosInstance.get('/test');
    return response.data;
  } catch (error){
    console.error(error);
  }
}