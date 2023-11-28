import {createSlice} from '@reduxjs/toolkit';
import {UsersDatas} from '../FakeData';



export const userSlice = createSlice({
    name: "users",
    initialState: {value: UsersDatas},
    reducers: {
        addUser: (state, action) => {

            //ga add sya ug user
            state.value.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id);
        }
    }, 
});

//add user / update / delete 
export const {addUser, deleteUser} = userSlice.actions;

export default userSlice.reducer;    