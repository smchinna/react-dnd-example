export default {
  /**
   * Function to detect the mobile devices.
   * @returns {boolean}
   */
  isMobile() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent));
  },
  /**
   * Arbitrary function which returns true or false as per the data availability.
   * @param {Any} data
   * @returns {boolean} true if data is empty or false if data presents
   */
  isEmpty(data) {
    return (
      data === null ||
      data === undefined ||
      (data.hasOwnProperty('length') && data.length === 0) ||
      (data.constructor === Object && Object.keys(data).length === 0)
    );
  },
  shouldPureComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState);
  },
}

const shallowEqual = (objA, objB) => {
  if (objA === objB) {
    return true;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  const hasOwn = Object.prototype.hasOwnProperty;
  for (let i = 0; i < keysA.length; i += 1) {
    if (!hasOwn.call(objB, keysA[i]) ||
      objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }

    const valA = objA[keysA[i]];
    const valB = objB[keysA[i]];

    if (valA !== valB) {
      return false;
    }
  }

  return true;
};
