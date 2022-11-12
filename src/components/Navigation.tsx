import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <nav className='flex items-center justify-between h-[50px] px-5 text-white bg-gray-500'>
      <span className='font-bold'>React 2022</span>
      <span>
        <Link to='/' className='mr-2'>Products</Link>
        <Link to='/about'>About</Link>
      </span>
    </nav>
  )
}
