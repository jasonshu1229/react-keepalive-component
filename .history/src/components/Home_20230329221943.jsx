import React from 'react'
import { useCallback } from 'react'

function Home(props) {
  const handleReset = useCallback((cacheId) => {
    props.dispatch({ type: "DESTROY", payload: { cacheId: cacheId} })
  })
  
  return (
    <div>
      <button onClick={() => handleReset("UserAdd")}>重置 UserAdd</button>
      <button onClick={() => handleReset("UserList")}>重置 UserList</button>
    </div>
  )
}

export default Home
