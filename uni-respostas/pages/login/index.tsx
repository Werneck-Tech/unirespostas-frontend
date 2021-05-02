import { FacebookButton } from '../../components/FacebookButton'
import { GoogleButton } from '../../components/GoogleButton'
import { Input } from '../../components/Input'
import styles from './styles.module.scss'

export default function Login() {
   return (
     <div className={styles.container}>
          <h2>
            UniRespostas
          </h2>
          <button className={styles.createAccountButton}>
            Novo por aqui ? crie sua conta
          </button>
          
          <div className={styles.oAuthButtonsContainer}>
              <FacebookButton/>
              <GoogleButton/>
          </div>
          <div className={styles.divider}>

          </div>
          <form>
            <span>
              OU
            </span>
            <Input type ='email' placeholder ='Email' />
            <Input type ='password' placeholder ='Senha' />
            <button type='submit'>ENTRAR</button>
          </form>
          
     </div>
   )
 }
 