import { toastErrorNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";
import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice";
import { useDispatch } from "react-redux";

const useStockCalls = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch()
//   const getFirms = async () => {
// try {
//    const { data } = await axiosWithToken("/firms/");
//    dispatch(getFirmsSuccess(data.data))
  
// } catch (error) {
//   dispatch(fetchFail())
//   toastErrorNotify("Firma bilgileri listelenemedi.")
// }

   

//   };
//   const getSales = async () => {
// try {
//    const { data } = await axiosWithToken("/sales/");
//    dispatch(getSalesSuccess(data.data))
  
// } catch (error) {
//   dispatch(fetchFail())
//   toastErrorNotify("Sales bilgileri listelenemedi.")
// }
  const getStocks = async (url="firms") => {
    dispatch(fetchStart())
try {
   const { data } = await axiosWithToken(`/${url}/`);
  //  dispatch(getStockSuccess({data:data.data,url:url}))
  const apiData = data.data
   dispatch(getStockSuccess({apiData,url}))
  
} catch (error) {
  dispatch(fetchFail())
  toastErrorNotify(`${url} bilgileri listelenemedi.`)
}

   

  };
  return { getStocks };
};

export default useStockCalls;
