/* Oca WebTech  */
import React, { useEffect, useState } from 'react'
import AllList from './AllList'
import Chart from './Chart'
import ExpenseInputs from './ExpenseInputs'
import ExpenseList from './ExpenseList'
import Header from './Header'
import IncomeInputs from './IncomeInputs'
import IncomeList from './IncomeList'
import ToggleButton from './ToggleButton'

function Body({ author }) {
    const [expenseShown, setExpenseShown] = useState(false)
    const [incomeShown, setIncomeShown] = useState(false)
    const [allShown, setAllShown] = useState(true)
    const [expense, setExpense] = useState("")
    const [expenseAmount, setExpenseAmount] = useState("")
    const [income, setIncome] = useState("")
    const [incomeAmount, setIncomeAmount] = useState("")
    const [totalIncome, setTotalIncome] = useState("")
    const [totalExpense, setTotalExpense] = useState("")
    const [totalBalance, setTotalBalance] = useState("")
    const [moneySymbol, setMoneySymbol] = useState("")
    const [editingMode, setEditingMode] = useState(false)
    const [updateId, setUpateId] = useState("")

    const [budgetList, setBudgetList] = useState(JSON.parse(localStorage.getItem("data")) || [])

    useEffect(() => {
        let totalIncome = 0
        let totalExpense = 0
        budgetList.filter(list => list.type === "income").map(li => {
            totalIncome += +li.amount
        })
        budgetList.filter(list => list.type === "expense").map(li => {
            totalExpense += +li.amount
        })
        setTotalIncome(totalIncome)
        setTotalExpense(totalExpense)
        setTotalBalance(totalIncome - totalExpense)
        setMoneySymbol(totalIncome >= totalExpense ? <small>&#8358;</small> : <small>-&#8358;</small>)
        localStorage.setItem("data", JSON.stringify(budgetList))

    }, [budgetList])

    const showExpenseList = (e) => {
        setExpenseShown(true)
        setIncomeShown(false)
        setAllShown(false)
        setEditingMode(false)

    }
    const showIncomeList = (e) => {
        setExpenseShown(false)
        setIncomeShown(true)
        setAllShown(false)
        setEditingMode(false)

    }
    const showAllList = (e) => {
        setExpenseShown(false)
        setIncomeShown(false)
        setAllShown(true)
        setEditingMode(false)

    }

    // Add or update Expense
    const addExpense = () => {

        // add expense
        if (!editingMode) {
            if (expense && expenseAmount) {
                let data = {
                    id: Date.now(),
                    type: "expense",
                    title: expense,
                    amount: expenseAmount,
                    addedAt: Date.now()
                }
                setBudgetList(oldBudget => [data, ...oldBudget])
                setExpense("")
                setExpenseAmount("")
            } else {
                alert("Add Expenses details and try again")
            }

        } else {
            // Update Item
            if (expense && expenseAmount) {
                let itemToUpate = budgetList.find(list => list.id === updateId)
                let otherLists = budgetList.filter(list => list.id !== updateId)
                setBudgetList([...otherLists, { ...itemToUpate, title: expense, amount: expenseAmount, updatedAt: Date.now() }])
                setEditingMode(false)
                setExpense("")
                setExpenseAmount("")
            } else {
                alert("Cannot Update to Empty Details")
            }


        }
    }

    // Add  or Update Income
    const addIncome = () => {

        // add new
        if (!editingMode) {
            if (income && incomeAmount) {
                let data = {
                    id: Date.now(),
                    type: "income",
                    title: income,
                    amount: incomeAmount,
                    addedAt: Date.now()
                }
                setBudgetList(oldBudget => [data, ...oldBudget])
                localStorage.setItem("data", JSON.stringify(budgetList))
                setIncome("")
                setIncomeAmount("")
            } else {
                alert("Enter the income details and try again")
            }

            return
        } else {
            // Update Item
            if (income && incomeAmount) {
                let itemToUpate = budgetList.find(list => list.id === updateId)
                let otherLists = budgetList.filter(list => list.id !== updateId)
                setBudgetList([...otherLists, { ...itemToUpate, title: income, amount: incomeAmount, updatedAt: Date.now() }])
                setEditingMode(false)
                setIncome("")
                setIncomeAmount("")
            } else {
                alert("Cannot Update to Empty Details")
            }
        }

        let totalIncome = 0
        budgetList.filter(list => list.type === "income").map(li => {
            totalIncome += +li.amount
        })
        setTotalIncome(totalIncome)
        setMoneySymbol(totalIncome >= totalExpense ? <small>&#8358;</small> : <small>-&#8358;</small>)

    }

    // Delete
    const deleteItem = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            setBudgetList(oldBudget => {
                return budgetList.filter(list => list.id !== id)
            })

        }



    }
    // Edit Mode
    const editItem = (id, title, amount) => {
        let item = budgetList.find(list => list.id === id)
        title(item.title)
        amount(item.amount)
        setEditingMode(true)
        setUpateId(id)
    }
    return (
        <>
            {/* Header */}
            <div className='header'>
                <Header moneySymbol={moneySymbol} totalBalance={totalBalance} />
                <Chart totalIncome={totalIncome} totalExpense={totalExpense} totalBalance={totalBalance} />

            </div>

            <div className='body'>
                <h2>Dashboard</h2>
                <ToggleButton expenseShown={expenseShown}
                    showExpenseList={showExpenseList}
                    incomeShown={incomeShown}
                    showIncomeList={showIncomeList}
                    allShown={allShown}
                    showAllList={showAllList} />

                {/* List Container */}
                <div className="list-container">
                    {expenseShown && <ExpenseList budgetList={budgetList}
                        editItem={editItem}
                        setExpense={setExpense}
                        setExpenseAmount={setExpenseAmount}
                        deleteItem={deleteItem} />}

                    {incomeShown && <IncomeList budgetList={budgetList}
                        editItem={editItem}
                        setIncome={setIncome}
                        setIncomeAmount={setIncomeAmount}
                        deleteItem={deleteItem} />}
                    {allShown && <AllList budgetList={budgetList} deleteItem={deleteItem} />}
                </div>
            </div>

            {/* Footer */}

            {expenseShown | incomeShown &&
                <div className='footer'>
                    {expenseShown && <ExpenseInputs setExpense={setExpense}
                        expense={expense}
                        setExpenseAmount={setExpenseAmount}
                        expenseAmount={expenseAmount}
                        addExpense={addExpense}
                        editingMode={editingMode} />}

                    {incomeShown && <IncomeInputs income={income}
                        setIncome={setIncome}
                        setIncomeAmount={setIncomeAmount}
                        incomeAmount={incomeAmount}
                        addIncome={addIncome}
                        editingMode={editingMode} />}
                </div>
            }
        </>
    )
}

export default Body