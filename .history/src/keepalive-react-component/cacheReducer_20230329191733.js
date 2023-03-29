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
          cacheId: payload.cacheId, // 缓存的 id
          reactElement: payload.reactElement, // 要渲染的虚拟DOM
          doms: undefined; //
          status: cacheTypes.CREATE, // 缓存的状态是创建中
        },
      };
    default:
      return cacheStates;
  }
}

export default cacheReducer;
