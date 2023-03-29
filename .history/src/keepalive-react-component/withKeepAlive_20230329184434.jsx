import { useRef } from "react";

// 保存激活过属性组件的高阶组件
function withKeepAlive(OldComponent, { cacheId = window.location.pathname }) {
  return function (props) {
    const divRef = useRef(null);
    return <div id={`withKeepAlive-${cacheId}`} ref={divRef}></div>
  }
}

export default withKeepAlive;

/**
 * 本组件的核心思路：
 *  需要通过"缓存容器"去创建<OldComponent>对应的真实DOM，并且把真实DOM存入到缓存中去；
 *  这样即使<OldComponent>被销毁了，还可以从"缓存容器"中获取真实的DOM；
 *  如果以后<OldComponent>再次渲染的时候，就可以复用上次缓存的组件DOM了；
 */