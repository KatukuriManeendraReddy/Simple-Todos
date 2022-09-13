import './index.css'

const TodoItem = props => {
  const {ItemDetails, deleteItem} = props
  const {id, title} = ItemDetails
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="list-item">
      <p className="paragraph">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
