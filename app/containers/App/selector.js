/*
 *
 * App selectors
 *
 */

import { createSelector } from 'reselect';

const makeSelectAppDomain = () => (state) => state.get('app');


const makeSelectUserData = () => createSelector(
  makeSelectAppDomain(),
  ((appState) => {
    return appState['data']
  })
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  makeSelectLocationState,
  makeSelectUserData
};
