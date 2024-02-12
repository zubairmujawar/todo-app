import { useState } from 'react'
import './App.css'

function App() {
 const [input, setInput] = useState('')
 const [todos, settodos] = useState([])


 const addTodos =()=>{
  if(!input){
    alert("please write somthing")
  }else{
    settodos([...todos, input])
    setInput('')
  }
 }
 const checkBoxClick =()=>{
  if(checkBoxClick===true){
    li.style.background = green
  }
 }
 const deleteTodo = (id)=>{
  let updatedTodo = todos.filter((e,index)=>{
    return index!=id
  })
  settodos(updatedTodo)
 }

  return (
    <>
      <h1>Todo App</h1>
      
      <input type='text' placeholder='Add your task' className='input' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button className='Btn' onClick={addTodos}>Add</button>
      {
        todos.map((todo, index)=>{
          return (
            <ul key={index}>
              <input type="checkbox" name="box" id="checkbox" />
              <li onChange={checkBoxClick}>{todo}</li>
              <button onClick={()=>deleteTodo(index)}>Delete</button>
            </ul>
            
          )
        })
      }
    </>
  )
}

export default App
