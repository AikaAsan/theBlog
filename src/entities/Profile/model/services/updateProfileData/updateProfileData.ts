import { ValidationProfileError } from './../../types/profile';
import { validateProfileData } from './../validateProfileData/validateProfileData';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

//async Thunk
export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidationProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    // in components use useSelector, in asyncThunk use getState()
    const formData = getProfileForm(getState());

    const errors = validateProfileData(formData);

    if (errors.length) {
        return rejectWithValue(errors);
    }
    try {
        const response = await extra.api.put<Profile>(
            `/profile/${formData?.id}`,
            formData
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue([ValidationProfileError.SERVER_ERROR]);
    }
});
