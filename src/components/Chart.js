import React, { useRef, useEffect } from 'react'

function Chart({totalIncome, totalExpense}) {
  const chartRef = useRef(null)
  useEffect(() => {
chartRef.current.innerHTML = ""
const canvas = document.createElement("canvas")
canvas.height = 100
canvas.width = 100


chartRef.current.appendChild(canvas)

// Draw   On Canvas
const ctx = canvas.getContext("2d")
ctx.lineWidth = 15

// Circle radius
const R = 40
const drawCircle = (color, ratio, anticlockwise)=>{
    ctx.strokeStyle = color
    ctx.beginPath()
    ctx.arc(canvas.width/2, canvas.height/2, R, 0, ratio*2*Math.PI, anticlockwise)
    ctx.stroke()
}

const updateChart = (income, outcome) => {
  ctx.clearRect(0,0, canvas.width, canvas.height)
  let ratio = income/(income+outcome)
  drawCircle("#fff", -ratio, true)
  drawCircle("#f0624d", 1-ratio, false)
}

updateChart(totalIncome, totalExpense)


  }, [totalExpense,totalIncome])

  
  return (
    <div className='chart-container'>
        <div className="income">
            <h3 className='label'>Income</h3>
            <h3 className='value'>&#8358; {totalIncome}</h3>
        </div>
        <div className="chart" ref={chartRef}></div>
        <div className="outcome">
            <h3 className='label'>Outcome</h3>
            <h3 className='value'>&#8358; {totalExpense}</h3>
        </div>

    </div>
  )
}

export default Chart