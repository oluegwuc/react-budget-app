import React from 'react'

function IncomeInputs({
    income,
    setIncome,
    setIncomeAmount,
    incomeAmount,
    addIncome,
    editingMode }) {
    return (
        <>
            <div className="income-input-container">
                <input type="text" placeholder='Enter Income' onChange={(e) => setIncome(e.target.value)} value={income} />
                <input type="number" placeholder='&#8358; 0' onChange={(e) => setIncomeAmount(e.target.value)} value={incomeAmount} />
                <div className="btn add-btn" onClick={addIncome}>{!editingMode ? <h4>&#10004;</h4> : <h4>&#10000;</h4>}</div>
            </div>
        </>
    )
}

export default IncomeInputs