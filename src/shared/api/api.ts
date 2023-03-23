import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

import axios from 'axios';

export const $api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
    },
});
