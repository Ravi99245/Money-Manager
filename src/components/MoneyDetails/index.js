import './index.css'

const MoneyDetails = props => {
  const {details} = props
  const {totalIncome, totalExpenses} = details
  const currentBalance = totalIncome - totalExpenses

  return (
    <ul className="details-container">
      <li className="balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          className="balanceImg"
          alt="balance"
        />
        <div className="amount-container">
          <p className="amount">Your Balance</p>
          <p className="rupees" data-testid="balanceAmount">
            Rs {currentBalance}
          </p>
        </div>
      </li>
      <li className="income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          className="balanceImg"
          alt="income"
        />
        <div className="amount-container">
          <p className="amount">Your Income</p>
          <p className="rupees" data-testid="incomeAmount">
            Rs {totalIncome}
          </p>
        </div>
      </li>
      <li className="expense">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          className="balanceImg"
          alt="expenses"
        />
        <div className="amount-container">
          <p className="amount">
            Your Expenses <br />
          </p>
          <p className="rupees" data-testid="expensesAmount">
            Rs {totalExpenses}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
