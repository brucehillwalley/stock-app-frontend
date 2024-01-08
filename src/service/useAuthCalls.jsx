import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {token}=useSelector((state)=>state.auth)

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login işlemi başarılı");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login işlemi başarısız oldu");
      console.log(error);
    }
  };

  const register =async ()=>{}
  const logout =async ()=>{}
  return { login, register, logout };
};

export default useAuthCalls;
