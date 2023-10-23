'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/Header'
import List from '../components/List'
import Description from '../components/Description'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'


function Home() {
  const inputRef = useRef<HTMLInputElement>(null)
  
  const handleClick = () =>{
    if(inputRef.current){
      inputRef.current.focus()
    }
    console.log(inputRef.current?.value)
  }

  
  return (
    <main className={styles['main-hi']}>
      <Link href="/tala-test">Press: Tala-test</Link>
      <h1>Home</h1>
      <input ref={inputRef}></input>
      <button onClick={handleClick}>Click to focus</button>
    </main>
  )
}

export default Home;