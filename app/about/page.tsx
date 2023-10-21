import Link from 'next/link';
import styles from '../page.module.css';


function About(){
    return(
    <div className={styles['main-hi']}>
        <h1 style={{color:"red", backgroundColor:"white"}}>About page</h1>
        <Link href="/" >Go to Home</Link>
    </div>
    )
}

export default About;