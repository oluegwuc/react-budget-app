import React from 'react'
import logo from "../components/logo.png"

function Header({ moneySymbol, totalBalance }) {
  return (
    <>
      <img className='logo' src={logo} alt="" />
      <div className="title-container">
        <h2 className="title"><span>Oca</span>WebTech</h2>
        <h3 className="subtitle">Budget App</h3>
      </div>

      <div className="balance-container">
        <h2 className='label'>Balance</h2>
        <h2 className='value'>{moneySymbol}{Math.abs(totalBalance)}</h2>
      </div>

    </>
  )
}

export default Header