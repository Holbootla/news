import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile, ValidateProfileError } from '../../types/profile';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { validateProfileData } from '@/entities/Profile/model/services/validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<Array<ValidateProfileError> | ValidateProfileError.SERVER_ERROR>>(
    'profile/updateProfileData',
    async (
        _,
        {
            rejectWithValue,
            extra,
            getState,
        },
    ) => {
        try {
            if (!extra.api) {
                return null;
            }

            const formData = getProfileFormData(getState());

            const validateErrors = validateProfileData(formData);

            if (validateErrors.length > 0) {
                return rejectWithValue(validateErrors);
            }

            const response = await extra.api.put<Profile>('/profile', formData);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(ValidateProfileError.SERVER_ERROR);
        }
    },
);
