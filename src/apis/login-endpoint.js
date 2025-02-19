import { axiosInstance } from "@apis/axiosInstance.js";

/**
 * 🔥 로그인 API 호출 (POST /login)
 * @param {Object} params - 로그인 요청 데이터
 * @param {string} params.email - 사용자 이메일
 * @param {string} params.password - 사용자 비밀번호
 * @returns {Promise<Object>} - 로그인 응답 데이터 (토큰 포함)
 */
export const loginApi = async ({ email, password }) => {
    try {
      const response = await axiosInstance.post("/login", { email, password });
      console.log("🔍 서버 응답:", response.data);  // 응답 데이터 확인
      return response.data;
    } catch (error) {
      console.error("❌ 로그인 API 오류:", error.response?.data || error.message);
      throw error;
    }
  };
  