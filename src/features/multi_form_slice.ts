import { createSlice } from "@reduxjs/toolkit"
import { currentPlan, type IPlan } from "./plan"
import type { IAddOn } from "./add_on"

export type TMultiForm = {
    userName : string|null,
    phone : number|null,
    email : string|null,
    plan : IPlan,
    isYear : boolean,
    addOn : IAddOn[]
}

const initialState:TMultiForm = {
    userName : null,
    phone : null,
    email : null,
    plan : currentPlan[0],
    isYear : false,
    addOn : []
}

export const multiFormSlice = createSlice({
    name : "multiForm",
    initialState,
    reducers : {
        addUser : (state, action)=>{
            state.userName = action.payload.userName
            state.email = action.payload.email
            state.phone = action.payload.phone
        },
        setPlan :(state, action)=>{
            state.plan = action.payload.plan
        },
        setAddon :(state, action)=>{
            state.addOn = action.payload.addOn
        },
        setYear :(state, action)=>{
            state.isYear = action.payload.year
        },
    }
})

export const {addUser, setAddon, setYear, setPlan} = multiFormSlice.actions
export default multiFormSlice.reducer