import { createSlice } from "@reduxjs/toolkit"

const initialState={
  user:"",
  loading:"false",
  error:"false",
  token:"",
}

const authSlice = createSlice({
  name: "auth",

  initialState,
  reducers: {
    fetchStart:(state)=>{
      state.loading=true

    },
    loginSucces:(state, {payload})=>{
      state.loading=false
      state.user=payload.user.username
      state.token=payload.token

    },
    registerSuccess:()=>{},
    fetchFail:(state)=>{
        state.loading=false
        state.error=true

    },
    logoutSuccess:(state)=>{
      state.user = ""
      state.loading = false
      state.token = ""
    }
  },
})

export const {fetchFail,fetchStart,loginSuccess,logoutSuccess} = authSlice.actions
export default authSlice.reducer
