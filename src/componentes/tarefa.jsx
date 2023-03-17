import { useState } from 'react'
import styles from './tarefa.module.css'
import Trash from '../assets/trash.svg'
import $ from 'jquery';

function Tarefa(props) {
  const [count, setCount] = useState(0)
  function desabilitar(){
    console.log()
    $('p[name="'+ props.lin +'"]').css('color', '#808080');
    $('p[name="'+ props.lin +'"]').css('text-decoration', 'line-through');
  }
  return (
    <div className={styles.NewTarefa} >
        <div className={styles.tenta} onClick={desabilitar}>
            <input type="checkbox" name="" id=""  onClick={props.tarefaCon}></input>
        </div>
        <p name={props.lin} className={styles.textTarefa}>{props.texto}</p>
        <button><img src={Trash} alt="" /></button>
    </div>
  )
}

export default Tarefa
