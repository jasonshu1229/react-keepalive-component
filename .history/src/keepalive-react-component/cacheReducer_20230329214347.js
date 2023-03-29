import * as cacheTypes from "./cache-types";

/**
 *
 * @param {*} cacheStates 缓存状态
 * @param {*} action 改变缓存状态的方法
 */
function cacheReducer(cacheStates, action) {
  const payload = action.payload;
  const cacheId = payload.cacheId;

  switch (action.type) {
    case cacheTypes.CREATE:
      return {
        ...cacheStates,
        [cacheId]: {
          cacheId: cacheId, // 缓存的 id
          reactElement: payload.reactElement, // 要渲染的虚拟DOM
          doms: undefined, // reactElement 这个虚拟DOM 对应的真实DOM的集合（一个虚拟DOM可能对应多个真实DOM）
          status: cacheTypes.CREATE, // 缓存的状态是创建中
          scroll: {}, // 滚动信息保存对象，默认为 key 是滚动的DOM，值是滚动的位置
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
    case cacheTypes.DESTROY:
      return {
        ...cacheStates,
        [cacheId]: {
          //一个缓存条目
          ...cacheStates[cacheId],
          status: cacheTypes.DESTROY, //缓存的状态是销毁
        },
      };
    default:
      return cacheStates;
  }
}

export default cacheReducer;
