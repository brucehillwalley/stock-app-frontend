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
<<<<<<< HEAD
    loginSuccess:(state, {payload})=>{
      state.loading=false
      state.user=payload.user.username
      state.token=payload.token
=======
    loginSuccess:(state, {payload})=>{
      state.loading = false
      state.user = payload.user.username
      state.token = payload.token
>>>>>>> register-validation

    },
    registerSuccess:(state, { payload })=>{
      state.loading = false
      state.user = payload.data.username
      state.token = payload.token
    },
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

<<<<<<< HEAD
export const {fetchFail,fetchStart,loginSuccess,logoutSuccess} = authSlice.actions
=======
export const {fetchFail,fetchStart,loginSuccess,registerSuccess} = authSlice.actions
>>>>>>> register-validation
export default authSlice.reducer
