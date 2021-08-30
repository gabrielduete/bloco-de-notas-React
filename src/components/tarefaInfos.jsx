import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Botao from "./botao"

import './css/infos.css'

const Infos = () => {
    const params = useParams()
    const history = useHistory()
    
    const handleVoltar = () => {
        history.goBack()
    }
    
    return (
        <>
            <div className = 'infos-container'>
                <Botao onClick = {handleVoltar}>Voltar</Botao>
            </div>
            <div className="tarefa-detalhes">
                <h2>{params.tarefaTitulo}</h2>
                <p>SUA INFO</p>
            </div>
        </>
    );
}

export default Infos;