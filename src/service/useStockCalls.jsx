import { toastErrorNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";
import { fetchFail, getFirmsSuccess } from "../features/stockSlice";
import { useDispatch } from "react-redux";

const useStockCalls = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch()
  const getFirms = async () => {
try {
   const { data } = await axiosWithToken("/firms/");
   dispatch(getFirmsSuccess(data.data))
  
} catch (error) {
  dispatch(fetchFail())
  toastErrorNotify("Firma bilgileri listelenemedi.")
}

   

  };
  return { getFirms };
};

export default useStockCalls;
