import { useReducer,useCallback } from "react";
import cacheReducer from './cacheReducer';
import CacheContext from './CacheContext';
import * as cacheTypes from './cache-types';
function KeepAliveProvider(props){
    //cacheStates存放所有的缓存信息 dispatch派发动作方法，可以通过派发动作修改缓存信息
    let [cacheStates,dispatch] = useReducer(cacheReducer,{});
    const mount = useCallback(({cacheId,reactElement})=>{
        if(!cacheStates[cacheId]){
         dispatch({type:cacheTypes.CREATE,payload:{cacheId,reactElement}});//创建缓存，开始代孕
        }
    }, [cacheStates]);
  console.log(first)
    return (
        <CacheContext.Provider value={{cacheStates,dispatch,mount}}>
            {props.children}
            {
                Object.values(cacheStates).map(({cacheId,reactElement})=>(
                    <div id={`cache-${cacheId}`} key={cacheId} ref={
                        //如果给原生组件添加了ref,那么当此真实DOM渲染到页之后会执行回调函数
                        (divDOM)=>{
                            let cacheState = cacheStates[cacheId];
                            //这个过程是异步的 3 2 
                            if(divDOM && (!cacheState.doms)){
                                let doms = Array.from(divDOM.childNodes);
                                dispatch({type:cacheTypes.CREATED,payload:{cacheId,doms}});
                            }
                        }
                    }>{reactElement}</div>//divDOM儿子们就是这个reactElement渲染出来的真实DOM
                ))
            }
        </CacheContext.Provider>
    )
}
export default KeepAliveProvider;