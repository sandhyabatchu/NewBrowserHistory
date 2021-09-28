import './index.css'

const HistoryItem = props => {
  const {HistoryDetails, deleteTodo} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt=" domain logo" className="icon-logo" />
      <p className="title">{title}</p>
      <p className="title">{domainUrl}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
