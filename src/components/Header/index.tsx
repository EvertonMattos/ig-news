import Image from 'next/image';
import logoSvg from '../../../public/images/logo.svg';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
      <Image src={logoSvg} alt=" ignews seu blog de tecnologia" />
      <nav>   
       <a href="" className={styles.active}> Home</a>     
      <a href="" >Post</a>       
      </nav>
      <SignInButton />
      </div>
    </header>
  )
}