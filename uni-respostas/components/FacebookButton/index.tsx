import styles from './styles.module.scss'
import { FaFacebookSquare } from "react-icons/fa";


export function FacebookButton(){
   return(
      <button type="button" className={styles.container}>
        <FaFacebookSquare/>   CONTINUAR COM O FACEBOOK
      </button>
   )
}