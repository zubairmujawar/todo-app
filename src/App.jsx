import { useState, useEffect } from 'react'
import './App.css'

const getLocalTodos = ()=>{

  let list = localStorage.getItem('list')
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }else {
    return []
  }
 }

function App() {
  
 const [input, setInput] = useState('')
 const [todos, settodos] = useState(getLocalTodos())


 
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
//  to set the value in localStorage
 useEffect(() => {
   localStorage.setItem("list", JSON.stringify(todos))
 }, [input])
 

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
