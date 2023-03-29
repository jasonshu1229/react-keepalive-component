import React from 'react'
import { Link } from 'react-router-dom';

function UserList() {
  const users = new Array(100).fill(0);

  return (
    <div style={{ height: '200px', overflow: 'scroll'}}>
      {users.slice(0, 50).map((user, index) => (
        <div key={index}>
          <Link>{index}</Link>
        </div>
      )) }
    </div>
  )
}

export default UserList;
