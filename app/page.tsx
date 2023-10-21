'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/Header'
import List from '../components/List'
import Description from '../components/Description'
import Link from 'next/link'
import { useEffect, useState } from 'react'


function Home() {
  const [counter, setCounter] = useState(0);
  const [success, setSuccess] = useState(false)
  const handleClick = () =>  {
    setCounter(counter+1)
    if(counter === 10){
      setSuccess(true)
    }
  }

  useEffect(() =>{
    console.log('# Event is success')
  }, [success])

  useEffect(() =>{
  console.log('## Counter is triggered')
  
  }, [counter])

  return (
    <main className={styles['main-hi']}>
      <Link href="/tala-test">Press: Tala-test</Link>
      <h1>Home</h1>
      <div>Counter: {counter}</div>
      
      <button onClick={handleClick}>Click to increment</button>
    </main>
  )
}

export default Home;