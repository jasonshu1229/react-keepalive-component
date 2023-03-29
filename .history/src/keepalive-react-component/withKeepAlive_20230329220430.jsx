import { useContext, useEffect, useRef } from "react";
import CacheContext from "./CacheContext";

// 保存激活过属性组件的高阶组件
/**
 * 
 * @param {*} OldComponent 
 * @param {*} cacheId 每个路由下的唯一标识 缓存 id
 * @param {*} scroll 是否需要监听滚动事件，返回值时boolean
 * @returns 
 */
function withKeepAlive(OldComponent, { cacheId = window.location.pathname, scroll }) {
  return function (props) {
    const { cacheStates, mount, handleScroll } = useContext(CacheContext);
    const divRef = useRef(null);

    useEffect(() => {
      if (scroll) {
        // 需要保留滚动的位置，就给 <OldComponent/> 的div加一个滚动事件的监听
        divRef.current.addEventListener("scroll", handleScroll.bind(null, cacheId), true); // 监听捕获阶段
      }
    }, [handleScroll])

    useEffect(() => {
      const cacheState = cacheStates[cacheId];
      // 如果真是DOMS 已经被渲染过
      if (cacheState && cacheState.doms) {
        // 获取真实的DOM，真是的DOM已经在 KeepAliveProvider 组件中渲染完成，需要取回来
        const doms = cacheState.doms;
        // 将真实的DOM渲染到页面中去（放回到本该属于自己的位置）
        doms.forEach(dom => divRef.current.appendChild(dom));
        if (scroll) {
          doms.forEach(dom => {
            if (ca)
          })
        }
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