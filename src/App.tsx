import TodoList from "./Component/Todolist/TodoList"
import Navbar from './Component/Navbar/Navbar'
import Focus from './Component/Focus/Focus'

const App:React.FC = () => {
  return (
    <div >
       <Navbar />
       <Focus />
       <TodoList />
    </div>
  )
}

export default App