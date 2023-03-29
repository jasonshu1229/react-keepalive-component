import { useCallback, useReducer } from "react";
import cacheReducer from './cacheReducer';
import CacheContext from './CacheContext'

import * as cacheTypes from './cache-types';

function KeepAliveProvider(props) {
  // cacheStates 存放所有的缓存信息，dispatch 通过派发动作修改缓存信息
  const [cacheStates, dispatch] = useReducer(cacheReducer);
  
  // 将传过来的 <OldComponent /> 生成真实DOM
  const mount = useCallback(({ cacheId, reactElement }) => {
    // 派发要缓存的组件 以及对应的 cacheId
    dispatch({type: cacheTypes.CREATE, payload: {cacheId, reactElement}})
  }, [])

  return(
    <CacheContext.Provider value={{cacheStates, dispatch}}>
      {props.children}
      {Object.keys(cacheStates).map(({cacheId, reactElement}) => (
        <div id={`cache-${cacheId}`} key={cacheId} ref={
          // 如果给原生标签添加了 ref，那么当此真实DOM渲染到页面之后会执行 ref 里面的回调函数
          (div)
        }>{reactElement}</div>
      ))}
    </CacheContext.Provider>
  )
}

export default KeepAliveProvider;
