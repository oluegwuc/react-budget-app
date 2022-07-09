import React from 'react'
import "./App.css"
import Body from './components/Body'

function App({ author }) {
  return (
    <div className='app'>
      <Body author={author} />
    </div>
  )
}

export default App