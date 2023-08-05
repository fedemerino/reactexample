import {Routes, Route} from 'react-router-dom'
import { Todo } from './components/Todo'
import { Todo2 } from './components/Todo2'
const Router = () => {
  return (
    <Routes>
      <Route path="/todo/:id?" element={<Todo/>} />
      <Route path="/todo2" element={<Todo2/>} />
    </Routes>
  )
}

export default Router