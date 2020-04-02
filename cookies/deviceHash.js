import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

import * as cookieTypes from './cookieTypes';

export const get = () => {
  let deviceHash = Cookies.get(cookieTypes.DEVICE_HASH);

  if (!deviceHash) {
    deviceHash = `WEBAPP-${uuidv4()}`;
    Cookies.set(cookieTypes.DEVICE_HASH, deviceHash);
  }

  return deviceHash;
};
