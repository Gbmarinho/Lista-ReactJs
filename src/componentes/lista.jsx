import { useState } from 'react'
import styles from './lista.module.css'
import plusCircle from '../assets/plusCircle.svg'
import Clipboard from '../assets/Clipboard.svg'

function Lista() {
  const [count, setCount] = useState(0)
  const [tarefas, setTarefas] = useState(0);

  function CriarTarefas(){
    
  }
  return (
    <div className={styles.Lista}>
        <div className={styles.Listacontent}>
            <form action="" className={styles.formLista}>
                <input  type="text" placeholder="Adicione uma nova frase"/>
                <button>Criar <img src={plusCircle} alt="" /></button>
            </form>
            <div className={styles.Tarefas}>
                <div className={styles.AboutTarefas}>
                    <strong>Tarefas criadas <span>0</span></strong>
                    <p>Concluidas <span>0</span></p>
                </div>
            </div>
            
            <div className={styles.IfhaveTarefas}>

            </div>

            <div className={styles.IfSemTarefas}>
                <img src={Clipboard} alt="" />
                <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
                </div>

            </div>


        </div>


    
    </div>
  )
}

export default Lista
