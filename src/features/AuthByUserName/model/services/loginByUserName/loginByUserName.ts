import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from '@/entities/User';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { loginActions } from '@/features/AuthByUserName/model/slice/loginSlice';

interface LoginByUserNameProps {
    username:string;
    password:string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, {rejectValue:string}>(
    'login/loginByUserName',
    async (
        authData,
        {
            rejectWithValue,
            dispatch,
        },
    ) => {
        try {
            const response = await axios.post<User>('http://localhost:8080/login', authData);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            dispatch(loginActions.clearLoginData());
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
