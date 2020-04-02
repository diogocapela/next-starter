import fetch from 'isomorphic-unfetch';

import { API } from '@ns/config/endpoints';
import { get as getDeviceHash } from '@ns/cookies/deviceHash';

export default async (endpoint, { method = 'GET', body, headers }) => {
  const res = await fetch(`${API}${endpoint}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'X-NS-Device-Hash': getDeviceHash(),
      ...headers,
    },
  });

  const data = await res.json();

  return data;
};
