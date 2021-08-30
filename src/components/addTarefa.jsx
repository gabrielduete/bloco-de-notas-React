import React, { useState } from 'react'

import './css/addTarefa.css'
import Botao from './botao'
import Desc from './desc'


const Botão = ( {handleAddTarefa }) =>{
    const [inputData, setInputData] = useState('')
    const [descData, setDescData] = useState('')

    const handleInput = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTarefaClick = () => {
        if (inputData === '' || inputData.length === 0){
            window.alert("Dê um nome a tarefa antes de adiciona-la... ¬¬'")
        }else{      
            handleAddTarefa(inputData)    
            setInputData("")
        }
    }

    const handleDesc = (e) => {
        console.log(e.target.value)
        setDescData(e.target.value)
    }

    const handleAddDescClick = () => {
        handleAddTarefa()
    }

    return ( 
        <>
            <div className = 'addTarefa-container'>
                <input onChange = {handleInput} value = {inputData} type="text" className = 'addTarefa-input' placeholder = 'Nome da tarefa' />
                <div className="addTarefa-button-container">
                    <Botao onClick={handleAddTarefaClick}>Adicionar</Botao>    
                </div>
            </div>
            <Desc onKeyUp = {handleDesc}/>
        </>
    )
}

export default Botão;