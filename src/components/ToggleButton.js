import React from 'react'

function ToggleButton({
    expenseShown,
    showExpenseList,
    incomeShown,
    showIncomeList,
    allShown,
    showAllList }) {
    return (
        <>
            <div className="buttons-container">
                <div className={expenseShown ? "expense-btn active" : "expense-btn"} onClick={showExpenseList}>Expenses</div>
                <div className={incomeShown ? "income-btn active" : "income-btn"} onClick={showIncomeList}>Incomes</div>
                <div className={allShown ? "all-btn active" : "all-btn "} onClick={showAllList}>All</div>
            </div>
        </>
    )
}

export default ToggleButton