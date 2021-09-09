import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
    name: 'users', 
    initialState: {
        current_user: {
            role: null
        }
    },
    reducers: {
        grantAdminAccess: state => {state.current_user.role = 'admin'},
        grantMemberAccess: state => {state.current_user.role = 'team-member'},
        revokeUserAccess: state => {state.current_user.role = null},
    } 
});

const {actions, reducer} = users;
export const {grantAdminAccess, grantMemberAccess, revokeUserAccess} = actions;
export default reducer;