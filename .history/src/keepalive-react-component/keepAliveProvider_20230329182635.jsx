import { useReducer } from "react";

function KeepAliveProvider(props) {
  // cacheStates 存放所有的缓存信息，dispatch 通过派发动作修改缓存信息
  const [cacheStates, dispatch] = useReducer();


}
