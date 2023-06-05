import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { ThunkConfig, ThunkExtraArg } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, ThunkApi) => {
        const { rejectWithValue, dispatch, extra } = ThunkApi;
        try {
            const { data } = await extra.api.post<User>('/login', authData);
            if (!data) throw new Error();
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(data));
            dispatch(userActions.setAuthData(data));
            extra.navigate('/profile');
            return data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
