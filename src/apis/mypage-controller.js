import { axiosInstance } from "@/apis/axiosInstance";

export const getMypage = async () => {
  try {
    const response = await axiosInstance.get("/member/mypage"); 
    console.log("📡 마이페이지 정보 응답:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ 마이페이지 API 오류:", error.response?.data || error.message);
    throw error;
  }
};

export const updateProfileImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axiosInstance.put("/member/mypage/profile-image", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("📡 프로필 이미지 업데이트 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ 프로필 이미지 업데이트 오류:", error.response?.data || error.message);
    throw error;
  }
};

export const updatePassword = async ({ originalPwd, newPwd, rewriteNewPwd }) => {
  try {
    const response = await axiosInstance.put("/member/change-pwd", {
      originalPwd,  // 기존 비밀번호
      newPwd,       // 새 비밀번호
      rewriteNewPwd // 새 비밀번호 확인
    });

    console.log("📡 비밀번호 변경 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ 비밀번호 변경 오류:", error.response?.data || error.message);
    throw error;
  }
};


export const deleteAccount = async () => {
  try {
    const response = await axiosInstance.delete("/member/mypage");
    console.log("📡 회원 탈퇴 성공");
    return response.data;
  } catch (error) {
    console.error("❌ 회원 탈퇴 오류:", error.response?.data || error.message);
    throw error;
  }
};
