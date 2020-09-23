import React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/books'>Books</Link>
    </div>
  )
}
