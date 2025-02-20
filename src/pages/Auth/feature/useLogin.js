import { useMutation } from "@tanstack/react-query";
import { loginApi } from "@apis/login-endpoint"; 
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const navigate = useNavigate(); 
  
    return useMutation({
      mutationFn: loginApi, 
      onSuccess: (data) => {
        console.log("✅ 로그인 성공:", data);  
        if (data?.accessToken) {
          localStorage.setItem("token", data.accessToken);   
          navigate("/");
        } else {
          console.error("❌ 서버에서 받은 데이터에 토큰이 없습니다!");
        }
      },
      onError: (error) => {
        console.error("❌ 로그인 실패:", error);
      },
    });
  };
  