import { createSlice } from '@reduxjs/toolkit'

const initialState = {
firms:[],
brands:[],
products:[],
purchases:[],
sales:[],
categories:[],
loading: false,
error: false,


}

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart:(state)=>{
      state.loading=true

    }, 
    // getFirmsSuccess:(state, {payload})=>{
    //   state.firms=payload
    //   state.loading=false
    // }, 
    // getSalesSuccess:(state, {payload})=>{
    //   state.sales=payload
    //   state.loading=false
    // }, 
    getStockSuccess:(state, {payload})=>{
      state[payload.url]=payload.apiData
      state.loading=false
    }, 
     fetchFail:(state)=>{
      state.loading=false
      state.error=true

  },

  }
});

export const {fetchStart,getStockSuccess,fetchFail} = stockSlice.actions

export default stockSlice.reducer