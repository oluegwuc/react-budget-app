import React from 'react'

function ExpenseList({
    budgetList,
    editItem,
    setExpense,
    setExpenseAmount,
    deleteItem}) {
    return (
        <>
            <ul className="list expense-list">
                {budgetList.map(list => {
                    if (list.type === "expense") {
                        return <li className={list.type} key={list.id} >{list.title} <p>{list.amount}</p> <div className="btn-group">
                            <button className="edit-btn" onClick={() => editItem(list.id, setExpense, setExpenseAmount)}>&#10000;</button> <button className="delete-btn" onClick={() => deleteItem(list.id)}>&#10005;</button> </div></li>
                    }
                })}
            </ul>
        </>
    )
}

export default ExpenseList