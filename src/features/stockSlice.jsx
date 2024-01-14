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
    getFirmSuccess:(state, {payload})=>{
      state.firms=payload
      state.loading=false
    }, 
     fetchFail:(state)=>{
      state.loading=false
      state.error=true

  },

  }
});

export const {getFirmSuccess} = stockSlice.actions

export default stockSlice.reducer