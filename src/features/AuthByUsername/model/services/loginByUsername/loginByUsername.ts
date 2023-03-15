import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
// import i18next from 'i18next';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}
//async Thunk
export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>('login/loginByUsername', async (authData, thunkAPI) => {
    try {
        const response = await axios.post<User>(
            'http://localhost:5000/login',
            authData
        );

        if (!response.data) {
            throw new Error();
        }
        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data)
        );
        thunkAPI.dispatch(userActions.setAuthData(response.data));

        console.log('response.data', response.data);
        return response.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue(
            // i18next.t('wrong username or password')
            'error'
        );
    }
});
