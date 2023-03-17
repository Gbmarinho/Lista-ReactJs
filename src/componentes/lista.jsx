import { useState } from 'react'
import styles from './lista.module.css'
import SingleTarefa from './tarefa'
import plusCircle from '../assets/plusCircle.svg'
import Clipboard from '../assets/Clipboard.svg'

function Lista() {
  const [count, setCount] = useState(0)
  const [tarefas, setTarefas] = useState([]);
  const [feitos ,setFeitos] = useState(0);
  function CriarTarefas(){
    event.preventDefault()
    const newText = event.target.tarefa.value;
    setTarefas([...tarefas, [newText, tarefas.length]]);
    event.target.tarefa.value = '';
  }
  function tarefaConcluida(){
    setFeitos(feitos + 1);
}
function DeletaComentario(comment, indice){
  const novasTarefas = tarefas.filter(taref => {
      if(taref[0] != comment){
        return taref
      }
      
  })
  if(indice == 1){
    setFeitos(feitos - 1);
  }
  setTarefas(novasTarefas);
}
  function ColocarTarefas(){
    if(tarefas.length == 0){
        return (<div className={styles.IfSemTarefas}>
            <img src={Clipboard} alt="" />
            <div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
            </div>

        </div>);
    }else{
        return (<div className={styles.IfhaveTarefas}>
        {tarefas.map(taref => {
            return <SingleTarefa key={taref[1]} lin={taref[1]} texto={taref[0]} del={DeletaComentario} tarefaCon={tarefaConcluida}/>
        })}
    </div>);

    }
  }


  return (
    <div className={styles.Lista}>
        <div className={styles.Listacontent}>
            <form onSubmit={CriarTarefas} className={styles.formLista}>
                <input  type="text" name="tarefa" placeholder="Adicione uma nova frase"/>
                <button>Criar <img src={plusCircle} alt="" /></button>
            </form>
            <div className={styles.Tarefas}>
                <div className={styles.AboutTarefas}>
                    <strong>Tarefas criadas <span>{tarefas.length}</span></strong>
                    <p>Concluidas <span>{feitos} de {tarefas.length}</span></p>
                </div>
            </div>
            {ColocarTarefas()}
            


        </div>


    
    </div>
  )
}

export default Lista
