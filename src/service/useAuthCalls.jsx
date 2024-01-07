import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const login = async (userInfo) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login/`,
        userInfo
      );
      toastSuccessNotify("Login işlemi başarılı");
      console.log(data);
    } catch (error) {
      toastErrorNotify("Login işlemi başarısız oldu");
      console.log(error);
    }
  };

  const register =async ()=>{}
  const logout =async ()=>{}
  return { login, register, logout };
};

export default useAuthCalls;
