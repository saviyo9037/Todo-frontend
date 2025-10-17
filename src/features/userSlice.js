import { createSlice } from "@reduxjs/toolkit";
import { getUserData } from "../utils/storageHandler";

const userSlice = createSlice({
    name: "user",
    initialState : getUserData() || null,
    reducers : {
        addData(state, action) {
           return state = action.payload
        }
    }
})

export const {addData} = userSlice.actions;
export default userSlice.reducer