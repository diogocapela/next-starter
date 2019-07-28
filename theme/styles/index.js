import { css } from '@emotion/core';

import normalize from './normalize';
import reset from './reset';
import global from './global';

export default css`
  ${normalize}
  ${reset}
  ${global}
`;
