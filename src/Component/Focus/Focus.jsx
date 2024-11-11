import { useEffect, useState } from 'react'
import './focus.css'

const Focus = () => {
  const [isStart, setIsStart] = useState(false)

  const handleStart = () => {
    setIsStart(!isStart)
  }

  return (
    <div className='Focus'>
      <div className="mainpart">
        <div className="buttons">
          <button>Pomodoro</button>
          <button>Short Break</button>
          <button>Long Break</button>
        </div>
        <div className="timer">25:00</div>
        <div className="start" onClick={handleStart}>
          <button className='buttonmain'>{isStart ? 'Stop' : 'Start'}</button>
        </div>
      </div>
      <div className="counter">#1</div>
      <div className="Timesay" >Time to Focus!</div>
    </div>
  )
}

export default Focus