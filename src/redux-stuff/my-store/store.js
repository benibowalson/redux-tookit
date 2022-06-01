import { configureStore } from "@reduxjs/toolkit";

import randomNameReducerx from "../my-slices/skin-color-slice";
import randomAgeReducer from "../my-slices/age-slice";

export default configureStore({
  reducer: {
    mySkinColorReducer: randomNameReducerx,
    myAgeReducer: randomAgeReducer,
  },
});
