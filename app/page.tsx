import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/Header'
import List from '../components/List'
import Description from '../components/Description'
import Link from 'next/link'


function Home() {
  let showDescription=true;

  return (
    <main className={styles['main-hi']}>
      <p>Hello React!</p>
      <Header text='Header component' textSub='hi' />
      {showDescription && <Description />}
      <List description="This is a description"/>
      <Link href="/about">Go to About</Link>
    </main>
  )
}

export default Home;