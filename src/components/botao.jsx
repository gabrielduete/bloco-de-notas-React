import React from 'react'

import './css/botao.css'

const Button = ({children, onClick}) => {
    return (
        <button onClick = {onClick} className = 'addTarefa-button'>
            {children}
        </button>
    )
}

export default Button;