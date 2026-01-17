import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Todo from './Todo.jsx'
import Child from './Child.jsx'
import Board from './Board.jsx'
import LoginForm from './LoginForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo/>
    {/* <Child/> */}
    {/* <App/> */}
    {/* <Board/> */}
    {/* <LoginForm/> */}
  </StrictMode>,
)
