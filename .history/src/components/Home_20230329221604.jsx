import React from 'react'
import { useCallback } from 'react'

function Home(props) {
  const handleReset = useCallback(() => {
    props.dispatch
  })
  

  return (
    <div>
      <button onClick={() => handleReset()}>重置 UserAdd</button>
      <button>重置 UserList</button>
    </div>
  )
}

export default Home
