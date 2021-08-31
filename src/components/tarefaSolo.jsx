import React from 'react'
import "./css/tarefa.css"
import { useHistory } from 'react-router-dom'

import { CgClose, CgInfo } from "react-icons/cg"

const Tarefa = ({ tarefa, handleTarefaClick, handleRemoverTarefa }) => {
    const history = useHistory()

    const handleTarefasDetalhes = () => {
        history.push(`/${tarefa.titulo}`)
    }

    return ( 
        <div 
        className = 'containerTarefas' 
        style={tarefa.finalizado ? {borderLeft: '6px solid #007bff'} : {} }
        >
                <div className="titulo-Container" onClick = {() => handleTarefaClick(tarefa.id)}>
                    {tarefa.titulo}
                </div>

                <div className="botões-container">
                    <button className = 'infos-Tarefa' onClick = {handleTarefasDetalhes}>
                        <CgInfo />                          
                    </button>
                    
                    <button className = 'remover-Tarefa' 
                    onClick = {() => handleRemoverTarefa(tarefa.id)}>
                        <CgClose />                          
                    </button>

                </div>
        </div>
    )
}
export default Tarefa;