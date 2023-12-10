import { configureStore } from "@reduxjs/toolkit";
import BurgerReducer from "../redux/reducer/BurgerReducer";

export default configureStore({
  reducer: {
    burger: BurgerReducer,
  },
});
