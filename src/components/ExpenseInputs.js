import React from 'react'

function ExpenseInputs({
    setExpense,
    expense,
    setExpenseAmount,
    expenseAmount,
    addExpense,
    editingMode }) {
    return (
        <>
            <div className="expense-input-container">
                <input type="text" placeholder='Enter Expenses' onChange={(e) => setExpense(e.target.value)} value={expense} />
                <input type="number" placeholder='&#8358; 0' onChange={(e) => setExpenseAmount(e.target.value)} value={expenseAmount} />
                <div className="btn add-btn" onClick={addExpense}>{!editingMode ? <h4>&#10004;</h4> : <h4>&#10000;</h4>}</div>
            </div>
        </>
    )
}

export default ExpenseInputs