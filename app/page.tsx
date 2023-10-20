import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/Header'
import List from '../components/List'
import Description from '../components/Description'

function Home() {
  return (
    <main className={styles.main1}>
      <p>Hello React!</p>
      <Header text='Header component' textSub='hi' />
      <Description />
      <List description="This is a description"/>
    </main>
  )
}

export default Home;