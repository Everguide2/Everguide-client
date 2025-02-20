import {axiosInstance} from "@apis/axiosInstance.js";

export const getNoAuth = async() => {
  try{
    const response = await axiosInstance.get('/noAuth');
    return response.data;
  } catch(error){
    console.error("noAuth API 오류:",error);
    throw error;
  }
}