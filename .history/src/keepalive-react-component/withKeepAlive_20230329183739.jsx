import { useRef } from "react";

function withKeepAlive(OldComponent, { cacheId = window.location.pathname }) {
  return function (props) {
    const divRef = useRef(null);
    return <div ref={divRef}></div>
  }
}

export default withKeepAlive;