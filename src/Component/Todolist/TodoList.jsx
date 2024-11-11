import './todolist.css'

const TodoList = () => {
  return (
    <div className='Todolist'>
      <div className="up">
        <p>Tasks</p>
        <img src="./more.png" alt="" />
      </div>
      <div className="down">
        <button className="Addtask">add task</button>
      </div>
    </div>
  )
}

export default TodoList