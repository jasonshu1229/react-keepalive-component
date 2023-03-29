import React from 'react'
import { Link } from 'react-router-dom';

function UserList() {
  const users = new Array(100).fill(0);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <Link>{index}</Link>
        </div>
      )) }
    </div>
  )
}

export default UserList;
