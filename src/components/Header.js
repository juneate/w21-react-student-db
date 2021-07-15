import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import UserContext from 'contexts/user'

const Header = () => {

  const {data} = useContext(UserContext)

  console.log(`Header()`, data)

  return (
    <header className="toplevel-header">
      <div className="container">
        <h1>Student Database</h1>
        {
          (data)
            ? <Link to="/user">{data.username}</Link>
            : <Link to="/login">Log-In</Link>
        }
      </div>
    </header>
  )
}

export default Header