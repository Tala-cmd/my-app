'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/Header'
import List from '../components/List'
import Description from '../components/Description'
import Link from 'next/link'
import { useState } from 'react'


function Home() {
  const [counter, setCounter] = useState(0);

  const handleClick = () =>  {
  setCounter(counter+1)
  }

  return (
    <main className={styles['main-hi']}>
      <h1>Home</h1>
      <div>Counter: {counter}</div>
      <button onClick={handleClick}>Click to increment</button>
    </main>
  )
}

export default Home;