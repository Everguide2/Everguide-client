import { axiosInstance } from "@apis/axiosInstance.js";

export const getWeeklyJob = async () => {
  try {
    const response = await axiosInstance.get("/jobs/thisWeekJob");
    return response.data;
  } catch (error) {
    console.error("WeeklyJob API 오류:", error);
    throw error;
  }
};
