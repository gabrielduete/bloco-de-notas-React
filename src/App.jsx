import React, { useState } from 'react'
import { v4 as uuidv4} from 'uuid'
import {BrowserRouter, Route} from 'react-router-dom'

import "./App.css"

import Tarefas from './components/tarefas'
import NovaTarefa from './components/addTarefa'
import Infos from './components/tarefaInfos'
import Cabecalho from './components/cabecalho'

const App = () =>{
  var [tarefas, setTarefas] = useState([
  ])

  // Função pra adicionar tarefa
  const handleAddTarefa = (tarefaTitulo, desc) => {
    const novaTarefa = [...tarefas, {
      titulo: tarefaTitulo,
      id: uuidv4(),
      finalizado: false,
      descricao: desc,
    }]

    setTarefas(novaTarefa)
  }
  // Função pra adicionar tarefa

  // Função pra remover a tarefa ao clicar no botão
  const handleRemoverTarefa = (tarefaID) => {
    const novaTarefaR = tarefas.filter(tarefa => tarefa.id !== tarefaID)

    setTarefas(novaTarefaR)
  }
  // Função pra remover a tarefa ao clicar no botão


  // Função pra ao clicar na tarefa ficar como concluída
  const handleTarefaClick = (tarefaID) => {
        const novaTarefa2 = tarefas.map( tarefa => {
          if (tarefa.id === tarefaID ){
            return {...tarefa, finalizado: !tarefa.finalizado}
          }else{
            return tarefa
          }
        })
        setTarefas(novaTarefa2)
  }
  // Função pra ao clicar na tarefa ficar como concluída
  
  return (
    <BrowserRouter>
      <div className = 'container'>
      <Cabecalho />
        <Route path = "/" exact render = {() => (
          <>
            <NovaTarefa handleAddTarefa = {handleAddTarefa}  />
            <Tarefas tarefas={tarefas}  handleTarefaClick = {handleTarefaClick} handleRemoverTarefa = {handleRemoverTarefa} />
          </>
        )}
        />
        <Route path = "/:tarefaTitulo" exact component = {Infos}

        />
      </div>
    </BrowserRouter>
  )
}

export default App