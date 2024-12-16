import React, { FormEvent, useState, ChangeEvent } from 'react'
import './UI/todolist.css'

interface Task {
  text: string;
  estimate: string;
}


const TodoList: React.FC = () => {
  const [whatTodo, setWhatTodo] = useState<string>('')
  const [estimateNumber, setEstimateNumber] = useState<string>('')
  const [isShown, setIsShown] = useState<boolean>(true)
  const [task, SetTask] = useState<Task[]>([])


  const handleForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (!whatTodo.trim() || !estimateNumber.trim()) {
      alert('Wrong information please recheck it')
      return
    }

    const newtask: Task = { text: whatTodo, estimate: estimateNumber }
    SetTask([...task, newtask])
    setEstimateNumber('')
    setWhatTodo('')
    setIsShown(!isShown)

  }
  const handleEstimateChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEstimateNumber(e.target.value)
  }
  const handleWhatTodoChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setWhatTodo(e.target.value)
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
                {task.text} <span>0/{task.estimate}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={isShown ? 'box' : 'box yesdisplay'} id='box'>
          <form onSubmit={handleForm}>
            <input className='first' type="text" placeholder='what are you working on?' onChange={handleWhatTodoChange} value={whatTodo} />
            <label htmlFor="estimate">Estimated Pomodoro</label>
            <input type="number" placeholder='Number' onChange={handleEstimateChange} value={estimateNumber} />
            <div className='buttons'>
              <button type='button' className='cancel' onClick={() => { setIsShown(true) }}>cancel</button>
              <button type='submit' >save</button>
            </div>
          </form>
        </div>
      </div>
      <div className="down">
        <button className="Addtask" onClick={() => { setIsShown(!isShown) }}>add task</button>
      </div>
    </div>
  )
}

export default TodoList