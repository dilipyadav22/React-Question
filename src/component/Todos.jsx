import React, { useState } from 'react'

const Todos = () => {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("")

    const Change=(e)=>{
        setInput(e.target.value)
    }

    const handleChange=(e)=>{
        e.preventDefault();
        if(input.trim()){
            setTodo([...todo,input]);
            setInput("");
        }


    }

  return (
    <div>
        <h1>TODO List</h1>
    <form onClick={handleChange} >
        <input type='text' value={input} placeholder='Enter task' onChange={Change} />
        <button type='submit' >Submit</button>
    </form>
    <ul>{
    todo.map((task,indx)=>(
           <li key={indx} >{task}</li>
    ))
    }
    </ul>
    </div>
  )
}

export default Todos