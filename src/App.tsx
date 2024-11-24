import TodoList from "./Component/TodoList"
import Navbar from './Component/Navbar'
import Focus from './Component/Focus'

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