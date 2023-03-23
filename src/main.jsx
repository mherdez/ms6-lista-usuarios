import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Intro from './Intro'

ReactDOM.createRoot(document.querySelector('#root')).render(
    <Intro texto='hola amigos' />
)
