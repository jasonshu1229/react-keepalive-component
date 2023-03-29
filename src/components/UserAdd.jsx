import React, { useState } from 'react'

function UserAdd() {
  const [count, setCount] = useState(0);
  return (
    <div>
      用户名：<input />
      <button onClick={() => setCount(count => count + 1)}>{ count }</button>
    </div>
  )
}

export default UserAdd;
