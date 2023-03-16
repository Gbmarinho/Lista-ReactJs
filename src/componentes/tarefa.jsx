import { useState } from 'react'
import styles from './tarefa.module.css'
import Trash from '../assets/trash.svg'

function Tarefa(props) {
  const [count, setCount] = useState(0)
  
  return (
    <div className={styles.NewTarefa}>
        <div>
            <input type="checkbox" name="" id=""  onClick={props.tarefaCon}></input>
        </div>
        <p className={styles.textTarefa}>{props.texto}</p>
        <button><img src={Trash} alt="" /></button>
    </div>
  )
}

export default Tarefa
