import './index.css'

const TransactionItem = props => {
  const {transaction, deleteTransaction} = props
  const {id, title, amount, type} = transaction

  const deleteItem = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction">
      <p className="title-name">{title}</p>
      <p className="title-name">Rs {amount}</p>
      <p className="title-name1">{type}</p>
      <button
        className="button1"
        type="button"
        data
        data-testid="delete"
        onClick={deleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          className="icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
