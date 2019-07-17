import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <ul style={style}>
        <li>Navigation</li>
        <li> <Link to="/">HOME</Link> </li>
        <li><Link to="/Music">Texas Country</Link></li>
        <li><Link to="/Create">Add New</Link></li>
        {/* <li><Link to="/New">My List</Link></li> */}


      </ul>

    </div>
  )
}

const style = {
  background: 'black',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-evenly'
}