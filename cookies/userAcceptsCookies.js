import Cookies from 'js-cookie';

import * as cookieTypes from './cookieTypes';

export const get = () => Cookies.get(cookieTypes.USER_ACCEPTS_COOKIES);

export const set = (value) => Cookies.set(cookieTypes.USER_ACCEPTS_COOKIES, value);
