import React from 'react'

function AllList({ budgetList, deleteItem }) {
    return (
        <>
            <ul className="list all-list">
                {budgetList.map(list => {
                    return <li className={list.type} key={list.id} >{list.title} <p>{list.amount}</p> <div className="btn-group">
                        <button className="delete-btn" onClick={() => deleteItem(list.id)}>&#10005;</button> </div></li>
                })}
            </ul>
        </>
    )
}

export default AllList