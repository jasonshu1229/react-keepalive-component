import * as cacheTypes from "./cache-types";

/**
 *
 * @param {*} cacheStates 缓存状态
 * @param {*} action 改变缓存状态的方法
 */
function cacheReducer(cacheStates, action) {
  const payload = action;

  switch (action.type) {
    case cacheTypes.CREATE:
      return {
        ...cacheStates,
        [payload.cacheId]: {
          cacheId: payload.cacheId,
          reactElement: payload.reactElement,
          status: cacheTypes.CREATE,
        },
      };
    default:
      return cacheStates;
  }
}

export default cacheReducer;
