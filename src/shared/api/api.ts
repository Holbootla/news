import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';

export const $api = __API__ ? axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY),
    },
}) : null;
