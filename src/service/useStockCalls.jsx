import { toastErrorNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";
import { fetchFail, getFirmsSuccess, getSalesSuccess } from "../features/stockSlice";
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
  const getSales = async () => {
try {
   const { data } = await axiosWithToken("/sales/");
   dispatch(getSalesSuccess(data.data))
  
} catch (error) {
  dispatch(fetchFail())
  toastErrorNotify("Sales bilgileri listelenemedi.")
}

   

  };
  return { getFirms, getSales };
};

export default useStockCalls;
