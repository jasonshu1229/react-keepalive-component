import { useCallback, useReducer } from "react";
import cacheReducer from './cacheReducer';
import CacheContext from './CacheContext'

function KeepAliveProvider(props) {
  // cacheStates 存放所有的缓存信息，dispatch 通过派发动作修改缓存信息
  const [cacheStates, dispatch] = useReducer(cacheReducer);
  
  // 将传过来的 <OldComponent /> 生成真实DOM
  const mount = useCallback()

  return(
    <CacheContext.Provider value={{cacheStates, dispatch}}>
      {props.children}
    </CacheContext.Provider>
  )
}

export default KeepAliveProvider;
