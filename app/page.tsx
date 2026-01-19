import Link from 'next/link'
import React from 'react'


const Home = () => {
  return (
    <>
    <h1>joseplorenzini next js</h1>

    <ul>
      <li><Link href="/">home</Link></li>
      <li><Link href="/about">about</Link></li> 
      <li><Link href="/about/team">contact</Link></li>
      <li><Link href="/contact">contact</Link></li>

    </ul>

    </>
  )
}

export default Home