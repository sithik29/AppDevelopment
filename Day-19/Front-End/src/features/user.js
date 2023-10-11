import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: { email: '' } },
    reducers: {
        login: (state, action) => {
            state.value = action.payload; // Remove the quotes around action.payload
        },
        logout: (state) => {
            state.value = "";
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
