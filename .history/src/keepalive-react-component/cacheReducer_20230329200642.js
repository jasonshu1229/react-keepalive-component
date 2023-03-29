import * as cacheTypes from "./cache-types";

/**
 *
 * @param {*} cacheStates 缓存状态
 * @param {*} action 改变缓存状态的方法
 */
function cacheReducer(cacheStates, action) {
  const payload = action;
  const cacheId = payload.cacheId;

  console.log(action.type);

  switch (action.type) {
    case cacheTypes.CREATE:
      return {
        ...cacheStates,
        [cacheId]: {
          111
        },
      };
    case cacheTypes.CREATED:
      return {
        ...cacheStates,
        [cacheId]: {
          // 一个缓存条目
          ...cacheStates[cacheId],
          doms: payload.doms, // 创建成功，成功插入真实DOM
          status: cacheTypes.CREATED, // 缓存的状态是创建成功
        },
      };
    default:
      return cacheStates;
  }
}

export default cacheReducer;
