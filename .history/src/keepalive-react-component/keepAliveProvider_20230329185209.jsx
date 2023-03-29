import { useCallback, useReducer } from "react";
import cacheReducer from './cacheReducer';
import CacheContext from './CacheContext'

import * as cacheTypes from './cache-types';

function KeepAliveProvider(props) {
  // cacheStates 存放所有的缓存信息，dispatch 通过派发动作修改缓存信息
  const [cacheStates, dispatch] = useReducer(cacheReducer);
  
  // 将传过来的 <OldComponent /> 生成真实DOM
  const mount = useCallback(({ cacheId, reactElement}) => {
    dispatch({type: cacheTypes.CREATE, payload: {cacheId, reactElement}})
  })

  return(
    <CacheContext.Provider value={{cacheStates, dispatch}}>
      {props.children}
    </CacheContext.Provider>
  )
}

export default KeepAliveProvider;
