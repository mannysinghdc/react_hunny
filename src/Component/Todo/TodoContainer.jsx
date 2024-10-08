import './TodoContainer.css'

const TodoContainer = ({children}) => {
  return (
    <div className="container_main">
      {children}
    </div>
  )
}

export default TodoContainer
