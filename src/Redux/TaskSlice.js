import { createSlice } from "@reduxjs/toolkit";


export const TaskSlice = createSlice({
    name: 'tasks',
    initialState: {
        value: JSON.parse(localStorage.getItem('tasks')) || [],
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload);
        },

        remove: (state, action) => {
            state.value = state.value.filter((task) => task.id != action.payload)
        }
    }
})

export const {add, remove} = TaskSlice.actions;

export const tasksReducer = TaskSlice.reducer;
