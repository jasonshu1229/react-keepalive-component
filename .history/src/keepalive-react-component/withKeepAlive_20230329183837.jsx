import { useRef } from "react";

// 保存激活过属性组件的高阶组件
function withKeepAlive(OldComponent, { cacheId = window.location.pathname }) {
  return function (props) {
    const divRef = useRef(null);
    return <div ref={divRef}></div>
  }
}

export default withKeepAlive;