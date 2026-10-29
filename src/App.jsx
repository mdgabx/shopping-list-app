import './App.css'
import { ShoppingList } from './components/shopping-list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ShoppingList />
    </>
  )
}

export default App
