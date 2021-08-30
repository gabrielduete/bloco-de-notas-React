import React from 'react'

import Tarefa from "./tarefaSolo" 

const tarefas = ({ tarefas,  handleTarefaClick, handleRemoverTarefa }) => {
    return (
        <>
            {tarefas.map( (tarefa) => (
                <Tarefa key = {tarefa.id} 
                        tarefa = {tarefa} 
                        handleTarefaClick = {handleTarefaClick} 
                        handleRemoverTarefa = { handleRemoverTarefa} />
            ))}
        </>
    )
}

export default tarefas