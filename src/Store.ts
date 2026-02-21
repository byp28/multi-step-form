import { configureStore } from "@reduxjs/toolkit";
import step from "./features/steps"
import multiForm, { type TMultiForm } from "./features/multi_form_slice";

export type TReducer = {
  step : {
    step : number
  },
  multiForm : TMultiForm
}


export const store = configureStore({
    reducer : {
        step,
        multiForm
    }
})