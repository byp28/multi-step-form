import { createSlice } from "@reduxjs/toolkit"

export type Tstep= {
    step : number
}

const initialState : Tstep = {
    step : 1
} 

export const stepSlice = createSlice({
    name : "step",
    initialState,
    reducers : {
        nextStep : (state, _action)=>{
            if(state.step < 5){
                state.step += 1
            }
        },
        prevStep : (state, _action)=>{
            if(state.step > 1){
                state.step -= 1
            }
        },
        changeStep : (state, _action)=>{
            state.step = 2
        }
    }
})

export const {nextStep, prevStep, changeStep} = stepSlice.actions
export default stepSlice.reducer