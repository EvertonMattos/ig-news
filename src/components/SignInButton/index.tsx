import {FaGithub, } from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss';
export function SignInButton(){
  const isUserLonggedIn = true;
  return isUserLonggedIn ? (

    <button type='button'
     className={styles.singInButton} >
      <FaGithub color='#84d361' />
      Everton Mattos
      <FiX color='#737380' className={styles.closeButton} />
    </button>
  ):(
    <button type='button'
    className={styles.singInButton} >
     <FaGithub color='#eba417' />
     Sign in with GitHub
   </button>
  )
}