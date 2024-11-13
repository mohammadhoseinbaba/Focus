import { useEffect, useState } from 'react'
import './focus.css'

const Focus = () => {



  const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(25 * 60)
    const [isRunning, setIsRunning] = useState(false)
    const [timerMode, setTimerMode] = useState('pomodoro')
    useEffect(() => {
      let interval;
      if (isRunning) {
        interval = setInterval(() => {
          setTimeLeft((prevTime) => {
            if (prevTime <= 0) {
              clearInterval(interval) //clear the interval when the time is reached up
              return 0;
            }
            return prevTime - 1 //decrement the time by one second
          })
        }, 1000);
      }
      return () => clearInterval(interval)
    }, [isRunning])

    const formatTime = (time) => {
      const minutes = Math.floor(time / 60)
      const seconds = time % 60
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    return <div>{formatTime(timeLeft)}</div>
  }

  const handlePomodoro = () => {
    setTimerMode('pomodoro')
    setTimeLeft(25*60)
    setIsRunning(false)
      }
      

  return (
    <div className='Focus'>
      <div className="mainpart">
        <div className="buttons">
          <button type='button' onClick={handlePomodoro}>Pomodoro</button>
          <button>Short Break</button>
          <button>Long Break</button>
        </div>
        <div className="timer"><Timer /></div>
        <div className="contorols" >
          {!isRunning ? (<button className='buttonmain' onClick={() => { setIsRunning(true) }}>Start</button>) : (<button className='buttonmain' onClick={() => { setIsRunning(false) }}>Stop</button>)}
        </div>
      </div>
      <div className="counter">#1</div>
      <div className="Timesay" >Time to Focus!</div>
    </div>
  )
}

export default Focus