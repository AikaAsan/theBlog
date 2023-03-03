import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

// Define a type for the slice state
// interface CounterState {
//     value: number;
// }

// Define the initial state using that type
const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
