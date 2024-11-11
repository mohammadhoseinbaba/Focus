import TodoList from "./Component/Todolist/TodoList"
import Navbar from './Component/Navbar/Navbar'
import Focus from './Component/Focus/Focus'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Focus />
      <TodoList />
    </div>
  )
}

export default App