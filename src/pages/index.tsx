import Image from 'next/image';
import girlCode from '../../public/images/avatar.svg';
import Head  from 'next/head';
import styles from './home.module.scss'
import { SubscribeButton } from '../components/SubscribeButton';
export default function Home() {
  return (
    <>
    <Head>
      <title>Inicio | Ig News</title>
    </Head>
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
      <span>👋 Hey, Welecome Ig News</span>
      <h1>News about the <span>React</span>World</h1>
      <p>
        Get acess to all publications <br/>
        <span>  for $9,97 moth  </span>
      </p>
      <SubscribeButton/>
      </section>
      <Image src={girlCode} alt='girl code'/>
    </main>
    </>
  )
}
