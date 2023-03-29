import { useContext, useEffect, useRef } from "react";
import CacheContext from "./CacheContext";

// 保存激活过属性组件的高阶组件
function withKeepAlive(OldComponent, { cacheId = window.location.pathname }) {
  return function (props) {
    const { cacheStates, dispatch, mount } = useContext(CacheContext);
    const divRef = useRef(null);

    useEffect(() => {
      const cacheState = cacheStates[cacheId];
      // 如果真是DOMS 已经被渲染过
      if (cacheState && cacheState.doms) {
        // 获取真实的DOM
        const doms = cacheState.doms;
        // 将真实的DOM渲染到页面中去
        doms.forEach(dom => divRef.current.appendChild(dom));
      } else {
        // 第一次渲染
        // 把渲染 <OldComponent />的任务交给 KeepAliveProvider组件，在那里派发以及缓存对应的DOM信息
        mount({ cacheId, reactElement: <OldComponent {...props} /> })
      }
    }, [cacheStates, mount, props])

    return <div id={`withKeepAlive_${cacheId}`} ref={divRef}>
      {/* 此处需要一个<OldComponent />渲染出来的真实DOM */}
    </div>
  }
}

export default withKeepAlive;

/**
 * 本组件的核心思路：
 *  需要通过"缓存容器"去创建<OldComponent>对应的真实DOM，并且把真实DOM存入到缓存中去；
 *  这样即使<OldComponent>被销毁了，还可以从"缓存容器"中获取真实的DOM；
 *  如果以后<OldComponent>再次渲染的时候，就可以复用上次缓存的组件DOM了；
 */