import {useState, useEffect} from "react";

export const useValidateLogin = () => {
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageToken = () => {
      setIsLogin(!!localStorage.getItem("token"));
    };

    handleStorageToken();
  }, []);

  return {isLogin, setIsLogin};
}