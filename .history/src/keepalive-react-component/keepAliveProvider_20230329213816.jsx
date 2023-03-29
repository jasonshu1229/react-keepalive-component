import { useCallback, useReducer } from "react";
import cacheReducer from './cacheReducer';
import CacheContext from './CacheContext'

import * as cacheTypes from './cache-types';

function KeepAliveProvider(props) {
  // cacheStates 存放所有的缓存信息，dispatch 通过派发动作修改缓存信息
  const [cacheStates, dispatch] = useReducer(cacheReducer, {});
  
  // 将传过来的 <OldComponent /> 生成真实DOM
  const mount = useCallback(({ cacheId, reactElement }) => {
    if (!cacheStates[cacheId]) {
      // 创建缓存：派发要缓存的组件 以及对应的 cacheId
      // dispatch({ type: cacheTypes.CREATE, payload: { cacheId, reactElement } });
      dispatch({type:cacheTypes.CREATE,payload:{cacheId,reactElement}});
    }
  }, [cacheStates])
    
  return(
    <CacheContext.Provider value={{cacheStates, dispatch, mount}}>
      {props.children}
      {Object.values(cacheStates).map(({cacheId, reactElement}) => (
        <div id={`cache-${cacheId}`} key={cacheId} ref={
          // 如果给原生标签添加了 ref，那么当此真实DOM渲染到页面之后会执行 ref 里面的回调函数
          // 这个真实divDom的 child 就是 reactElement 渲染出来的真实DOM
          (divRealDom) => {
            const cacheState = cacheStates[cacheId];
            if (divRealDom && !(cacheState.doms)) {
              const doms = Array.from(divRealDom.childNodes);
              // 每次 dispatch 都会触发更新
              dispatch({type: cacheTypes.CREATED, payload: { cacheId, doms }})
            }
          }
        }>{reactElement}</div>
      ))}
    </CacheContext.Provider>
  )
}

export default KeepAliveProvider;
