import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage"; //?  localStorage
import storage from "redux-persist/lib/storage/session"; //? session storage

const persistConfig = {
  key: "root",
  storage,
};

//?rootReducer kullanıldığında tüm state'ler storage'da tutulur
// const persistedReducer = persistReducer(persistConfig, rootReducer)
const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export default store;
