import './todolist.css'

const TodoList = () => {
  const handleClick = () => {

  }

  return (
    <div className='Todolist'>
      <div className="up">
        <p>Tasks</p>
        <img src="./more.png" alt="" />
      </div>
      <div className="middle">
        <div className="result">
          <p>the job to do</p>
          <div className='right'><p>0/4</p>
            <img src="more.png" alt="" />
          </div>

        </div>
        <div className="box">
          <input type="text" />
          <input type="number" />
          <button>save</button>
          <button>cancel</button>
        </div>

      </div>
      <div className="down">
        <button className="Addtask" onClick={handleClick}>add task</button>
      </div>
    </div>
  )
}

export default TodoList