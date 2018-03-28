/**
 * Contains setup for global sagas, as suggested in:
 * https://github.com/react-boilerplate/react-boilerplate/issues/537#issuecomment-274056491
 */

import { getAsyncInjectors } from 'utils/asyncInjectors';

// Global sagas must be imported and injected individually, not with default/spread.
import {updateLesson,watchLesson} from './containers/App/sagas';

export function injectGlobalSagas(store) {
  const { injectSagas } = getAsyncInjectors(store);

  injectSagas([
    updateLesson,
    watchLesson
  ]);
};


