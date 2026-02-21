import { configureStore } from "@reduxjs/toolkit";
import step from "./features/steps"

export type TReducer = {
  step : {
    step : number
  }
}


export const store = configureStore({
    reducer : {
        step
    }
})