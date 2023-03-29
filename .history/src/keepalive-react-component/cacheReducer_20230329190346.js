import * as cacheTypes from './cache-types';

/**
 *
 * @param {*} cacheStates 缓存状态
 * @param {*} action 改变缓存状态的方法
 */
function cacheReducer(cacheStates, action) {
  switch (action.type) {
    case cacheTypes.CREATE:
      return {
        ...cacheStates,
        [payload.cac]
      };
  }
}

export default cacheReducer;
