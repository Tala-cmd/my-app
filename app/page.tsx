'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/Header'
import List from '../components/List'
import Description from '../components/Description'
import Link from 'next/link'
import { useEffect, useRef, useState, useMemo} from 'react'


const calculateIncome = () =>{
  let number=10;
  for(let i=0; i<1000; i++){
    number= number+i
  }
  console.log('calculating...')
  return number
}


function Home() {
  const [counter, setCounter]=useState(0);
  const [shouldCalculate, setShouldCalculate]= useState(false);
  const income= useMemo(() => calculateIncome(), [shouldCalculate]);

  const handleClick = () =>{
    setCounter(counter+1);
    if(counter === 10){
    setShouldCalculate(true)
    }
  }
  
  return (
    <main className={styles['main-hi']}>
      <Link href="/tala-test">Press: Tala-test</Link>
      <h1>Home</h1>
      <h3>Counter: {counter}</h3>
      <h4>Income: {income}</h4>
      <button onClick={handleClick}>Increment</button>
    </main>
  )
}

export default Home;