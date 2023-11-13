import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const exampleList = [
  {
    id: uuidv4(),
    title: 'salary',
    amount: 500000,
    type: 'Income',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',
    balance: 0,
    income: 0,
    expenses: 0,
    transactionsContainer: [],
  }

  addTransactionItem = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    const transactionItem = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      transactionsContainer: [
        ...prevState.transactionsContainer,
        transactionItem,
      ],
      title: '',
      amount: '',
      type: 'Income',
    }))
  }

  deleteTransaction = id => {
    const {transactionsContainer} = this.state

    const index = transactionsContainer.findIndex(
      eachItem => id === eachItem.id,
    )

    const resultedList = transactionsContainer.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState({transactionsContainer: resultedList})
  }

  changeTitle = event => {
    this.setState({title: event.target.value})
  }

  changeAmount = event => {
    this.setState({amount: event.target.value})
  }

  changeOption = event => {
    if (event.target.value === 'INCOME') {
      this.setState({type: 'Income'})
    } else {
      this.setState({type: 'Expenses'})
    }
  }

  render() {
    const {
      title,
      amount,
      type,
      balance,
      income,
      expenses,
      transactionsContainer,
    } = this.state
    console.log(title, type, balance, income, expenses)
    console.log(type)

    const incomesList = transactionsContainer.filter(
      eachItem => eachItem.type === 'Income',
    )
    const totalIncome = incomesList.reduce(
      (accumulator, eachItem) => accumulator + parseInt(eachItem.amount),
      0,
    )

    const expensesList = transactionsContainer.filter(
      eachItem => eachItem.type === 'Expenses',
    )

    const totalExpenses = expensesList.reduce(
      (accumulator, eachItem) => accumulator + parseInt(eachItem.amount),
      0,
    )

    return (
      <div className="bg-container">
        <div className="profile">
          <h1 className="name">Hi, Richard</h1>
          <p className="description">
            Welcome back to your <span className="money">Money Manager</span>
          </p>
        </div>
        <div className="money-details">
          <MoneyDetails
            key={uuidv4()}
            details={{balance, totalIncome, totalExpenses}}
          />
        </div>
        <div className="transaction-container">
          <form className="form-container" onSubmit={this.addTransactionItem}>
            <h1 className="heading">Add Transaction</h1>
            <label className="title" htmlFor="title">
              TITLE
            </label>
            <input
              id="title"
              className="inputElement"
              type="text"
              onChange={this.changeTitle}
              placeholder="TITLE"
              value={title}
            />
            <label className="title" htmlFor="amount">
              AMOUNT
            </label>
            <input
              id="amount"
              className="inputElement"
              type="text"
              onChange={this.changeAmount}
              placeholder="AMOUNT"
              value={amount}
            />
            <label className="title" htmlFor="type">
              TYPE
            </label>
            <select
              id="type"
              onChange={this.changeOption}
              className="list"
              value={type}
            >
              <option
                className="option"
                value={transactionTypeOptions[0].optionId}
                selected
              >
                {transactionTypeOptions[0].displayText}
              </option>
              <option
                className="option"
                value={transactionTypeOptions[1].optionId}
              >
                {transactionTypeOptions[1].displayText}
              </option>
            </select>
            <button className="button" type="submit">
              Add
            </button>
          </form>
          <ul className="items-container">
            <h1 className="history">History</h1>
            <div className="titles">
              <p className="title-heading">Title</p>
              <p className="title-heading">Amount</p>
              <p className="title-heading">Type </p>
            </div>
            {transactionsContainer.map(eachItem => (
              <TransactionItem
                key={eachItem.id}
                transaction={eachItem}
                deleteTransaction={this.deleteTransaction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
