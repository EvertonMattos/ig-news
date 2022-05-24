import {GetStaticProps} from 'next'
import Image from 'next/image';
import girlCode from '../../public/images/avatar.svg';
import Head  from 'next/head';
import styles from './home.module.scss'
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../service/stripe';

interface HomeProps{
  product:{
    priceId:string;
    amount:number;
  }
}
export default function Home({product}:HomeProps) {
  
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
        <span>  for {product.amount} moth  </span>
      </p>
      <SubscribeButton priceId={product.priceId}/>
      </section>
      <Image src={girlCode} alt='girl code'/>
    </main>
    </>
  )
}
export  const  getStaticProps:GetStaticProps = async ()=>{ //revalidando a pagina 
const price = await stripe.prices.retrieve('price_1L2Io8IWOhKMk6rlUOv43TF7',)
  const product ={
    priceId:price.id,
    amount:new Intl.NumberFormat('en-US',{
      style:'currency',
      currency:'USD'
    }).format(price.unit_amount/100)
    }

  return{
 props:{
  product
 },
 revalidate: 60 * 60 * 24 //24hours
 }
}