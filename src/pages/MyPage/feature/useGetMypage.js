import { useQuery } from "@tanstack/react-query";
import { getMypage } from "@/apis/mypage-controller";

export const useGetMypage = () => {
  return useQuery({
    queryKey: ["mypage"],
    queryFn: getMypage,
    enabled: !!localStorage.getItem("accessToken"), 
    onError: (error) => {
      console.error("❌ 마이페이지 API 호출 실패:", error);

      if (error.response?.status === 401) {
        console.error("🚨 세션 만료됨. 로그아웃 처리");
        localStorage.removeItem("accessToken");
        alert("세션이 만료되었습니다. 다시 로그인해주세요.");
        window.location.href = "/login";
      }
    },
  });
};
