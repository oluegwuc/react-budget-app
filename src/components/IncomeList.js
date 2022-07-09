import React from 'react'

function IncomeList({
    budgetList,
    editItem,
    setIncome,
    setIncomeAmount,
    deleteItem }) {
    return (
        <>
            <ul className="list income-list">
                {budgetList.map(list => {
                    if (list.type === "income") {
                        return <li className={list.type} key={list.id} >{list.title} <p>{list.amount}</p> <div className="btn-group">
                            <button className="edit-btn" onClick={() => editItem(list.id, setIncome, setIncomeAmount)}>&#10000;</button> <button onClick={() => deleteItem(list.id)} className="delete-btn">&#10005;</button> </div></li>
                    }
                })}

            </ul>
        </>
    )
}

export default IncomeList