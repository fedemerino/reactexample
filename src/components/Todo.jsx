import { useParams } from "react-router-dom"

export const Todo = () => {
  const {id} = useParams()
  console.log(id)
  return (
    <div>Todo</div>
  )
}
