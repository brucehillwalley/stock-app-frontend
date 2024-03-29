import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firms: [],
  brands: [],
  products: [],
  purchases: [],
  sales: [],
  categories: [],
  loading: false,
  error: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.error = false;
      state.loading = true;
    },
    // getFirmsSuccess:(state, {payload})=>{
    //   state.firms=payload
    //   state.loading=false
    // },
    // getSalesSuccess:(state, {payload})=>{
    //   state.sales=payload
    //   state.loading=false
    // },
    getStockSuccess: (state, { payload }) => {
      state[payload.url] = payload.apiData;
      state.loading = false;
    },
    getProPurBranFirmSuccess: (state, { payload }) => {
      state.products = payload[0];
      state.purchases = payload[1];
      state.brands = payload[2];
      state.firms = payload[3];
      state.loading = false;
    },
    //! aşağıdaki gibi destructuring ile yapabiliriz
    // getStockSuccess: (state, { payload:{apiData,url} }) => {
    //   state.loading = false
    //   state[url] = apiData
    // },

    //!genel metod denemesi
    getStockPromiseSuccess: (state, { payload }) => {
      // for (let i = 0; i < payload.length; i++) {
      //   state[payload[i].name] = payload[i].data;
      // }
      payload.map(
        (_, index) => (state[payload[index].name] = payload[index].data)
      );

      state.loading = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getStockSuccess,
  fetchFail,
  getProPurBranFirmSuccess,
  getStockPromiseSuccess,
} = stockSlice.actions;

export default stockSlice.reducer;
