import React, { useState } from 'react'
import './todolist.css'

const TodoList = () => {
  const [whatTodo, SetWhatTodo] = useState('')
  const [estimateNumber, setEstimateNumber] = useState('')
  const [isShown, setIsShown] = useState(true)
  const [task, SetTask] = useState([])


  const handleForm = (e) => {
    e.preventDefault()

    if(!whatTodo.trim() || !estimateNumber.trim()){
      alert('Wrong information please recheck it')
      return
     }
    
    const newtask = { text: whatTodo, estimate: estimateNumber }
    SetTask([...task, newtask])
    setEstimateNumber('')
    SetWhatTodo('')

    setIsShown(!isShown)

  }

 

  return (
    <div className='Todolist'>
      <div className="up">
        <p>Tasks</p>
        <img src="./more.png" alt="" />
      </div>
      <div className="middle">
        <div className="result">
          <ul id='myul'>
            {task.map((task, index) => (
              <li key={index}>
                {task.text} <span>{task.estimate}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={isShown ? 'box' : 'box yesdisplay'} id='box'>
          <form onSubmit={handleForm}>
            <input className='first' type="text" placeholder='what are you working on?' onChange={e=>SetWhatTodo(e.target.value)} value={whatTodo} />
            <label htmlFor="estimate">Estimated Pomodoro</label>
            <input type="number" placeholder='Number' onChange={(e) => { setEstimateNumber(e.target.value) }} value={estimateNumber} />
            <div className='buttons'>
              <button type='button' className='cancel' onClick={() => { setIsShown(true) }}>cancel</button>
              <button type='submit' >save</button>
            </div>
          </form>
        </div>
      </div>
      <div className="down">
        <button className="Addtask" onClick={e=>{setIsShown(!isShown)}}>add task</button>
      </div>
    </div>
  )
}

export default TodoList