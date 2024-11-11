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
            <img src="moregray.png" alt="" />
          </div>

        </div>
        <div className="box">
          <form>
          <input  className='first' type="text" placeholder='what are you working on?' />
          <label htmlFor="">Estimated Pomodoro</label>
          <input type="number" placeholder='Number' />  
          <div className='buttons'>
          <button className='cancel'>cancel</button>
          <button>save</button>
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