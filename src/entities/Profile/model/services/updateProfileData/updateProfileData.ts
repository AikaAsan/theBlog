import { ThunkConfig } from 'app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

//async Thunk
export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>('profile/updateProfileData', async (_, thunkAPI) => {

    const { extra, rejectWithValue, getState} = thunkAPI;

    // in components use useSelector, in asyncThunk use getState()
    const formData = getProfileForm(getState());

    try {
        const response = await extra.api.put<Profile>('/profile', formData);

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
