import { useState } from 'react'
import './todolist.css'

const TodoList = () => {
  const [whatTodo, SetWhatTodo] = useState('')
  const [estimateNumber, setEstimateNumber] = useState('')

  const handleSubmit = () => {
    let li = document.createElement('li');
    let T = document.createTextNode(whatTodo)
    li.appendChild(T);
    if (whatTodo === '') {
      alert('Enter your text')
    } else {
      document.getElementById('myul').appendChild(li)
    }
    SetWhatTodo('')
  }

  const handleChange = (event) => {
    SetWhatTodo(event.target.value)
  }

  const handleForm = (e) => {
    e.preventDefault()
  }

  const handleClick = () => {
    let box = document.getElementById('box')
    box.classList.toggle('yesdisplay')
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

          </ul>
          <div className='right'><p>0/{estimateNumber}</p>
            <img src="moregray.png" alt="" />
          </div>

        </div>
        <div className="box" id='box'>
          <form onClick={handleForm}>
            <input className='first' type="text" placeholder='what are you working on?' onChange={handleChange} value={whatTodo} />
            <label htmlFor="">Estimated Pomodoro</label>
            <input type="number" placeholder='Number' onChange={(e) => { setEstimateNumber(e.target.value) }} value={estimateNumber} />
            <div className='buttons'>
              <button className='cancel'>cancel</button>
              <button onClick={handleSubmit}>save</button>
            </div>
          </form>
        </div>

      </div>
      <div className="down">
        <button className="Addtask" onClick={handleClick}>add task</button>
      </div>
    </div>
  )
}

export default TodoList