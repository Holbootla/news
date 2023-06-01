import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile, ValidateProfileError } from '../../types/profile';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { validateProfileData } from '@/entities/Profile/model/services/validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, string, ThunkConfig<Array<ValidateProfileError> | ValidateProfileError.SERVER_ERROR>>(
    'profile/updateProfileData',
    async (
        profileId,
        {
            rejectWithValue,
            extra,
            getState,
        },
    ) => {
        try {
            const formData = getProfileFormData(getState());

            const validateErrors = validateProfileData(formData);

            if (validateErrors.length > 0) {
                return rejectWithValue(validateErrors);
            }

            const response = await extra.api.put<Profile>(`/profile/${profileId}`, formData);

            if (!response?.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(ValidateProfileError.SERVER_ERROR);
        }
    },
);
