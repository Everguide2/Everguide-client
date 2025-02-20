import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const prevRequest = error?.config;
      if(error.response?.status === 401 && !prevRequest?.sent) {
        prevRequest.sent = true;
        try{
          const response = axios.post("/reissue", {}, {withCredentials: true});
          if(response.status === 200) {
            const newAccessToken = response.headers["authorization"].replace("Bearer ", "");
            localStorage.setItem("token", newAccessToken);
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
            prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            return axiosInstance(prevRequest);
          } else{
            throw new Error('Failed to refresh access token');
          }
        } catch(error){
          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
);