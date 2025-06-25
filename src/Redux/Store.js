import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./TaskSlice";

export default configureStore({
    reducer:{
        tasks: tasksReducer
    }
})