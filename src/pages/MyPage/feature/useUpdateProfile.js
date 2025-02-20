import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfileImage } from "@/apis/mypage-controller";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient(); 

  return useMutation({
    mutationFn: updateProfileImage,
    onSuccess: (data) => {
      console.log("📡 프로필 이미지 업데이트 성공:", data);

      queryClient.invalidateQueries(["mypage"]);
    },
    onError: (error) => {
      console.error("❌ 프로필 이미지 업데이트 오류:", error.response?.data || error.message);
      alert("프로필 이미지 변경에 실패했습니다.");
    },
  });
};

