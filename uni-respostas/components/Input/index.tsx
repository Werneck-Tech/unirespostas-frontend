import styles from './styles.module.scss'

import {  AiOutlineMail , AiOutlineLock } from "react-icons/ai";
import { useState } from 'react';


interface InputProps{
   type : string,
   placeholder : string,
   id ?: string,
}

const icons = {
   'email' : <AiOutlineMail />,
   'password' : <AiOutlineLock/>
}

const focusStyle = {
   borderColor : 'green',
}

export function Input({type,placeholder} : InputProps){

   const [isFocused,setIsFocused] = useState(false);

   return(
      <div className={styles.container} style={isFocused ? focusStyle : {}} >
         {icons[type]}
         <input 
            type = {type}
            placeholder ={placeholder}
            onFocus={ () => setIsFocused(true) }
            onBlur={()=>{ setIsFocused(false) }}
         />
      </div>
   )
}