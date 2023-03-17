import { useState } from 'react'
import styles from './tarefa.module.css'
import Trash from '../assets/trash.svg'
import $ from 'jquery';

function Tarefa(props) {
  const [count, setCount] = useState(0);
  const [ind, setInd] = useState(0);
  
  function desabilitar(){
     setInd(1);
    $('p[name="'+ props.lin +'"]').css('color', '#808080');
    $('p[name="'+ props.lin +'"]').css('text-decoration', 'line-through');
  }
  function deletar(){
    props.del(props.texto, ind)
  }
  
  return (
    <div className={styles.NewTarefa} >
        <div className={styles.tenta} onClick={desabilitar}>
            <input type="checkbox" name="" id=""  onClick={props.tarefaCon}></input>
        </div>
        <p name={props.lin} className={styles.textTarefa}>{props.texto}</p>
        <button onClick={deletar}><img src={Trash} alt="" /></button>
    </div>
  )
}

export default Tarefa
