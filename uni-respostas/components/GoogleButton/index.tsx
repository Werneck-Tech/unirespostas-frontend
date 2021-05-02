import styles from './styles.module.scss'
import { FaGoogle } from "react-icons/fa";


export function GoogleButton(){
   return(
      <button type="button" className={styles.container}>
        <img src = "images/google.svg"/>  CONTINUAR COM O GOOGLE
      </button>
   )
}