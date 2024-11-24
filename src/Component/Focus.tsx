import { useEffect, useState } from 'react'
import './UI/focus.css'

const Focus :React.FC= () => {

  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [timerMode, setTimerMode] = useState<string>('pomodoro')
  const [timeLeft, setTimeLeft] = useState<number>(25 * 60)

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
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


  const formatTime = (time:number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  const handlePomodoro = () => {
    setTimerMode('pomodoro')
    setTimeLeft(25 * 60)
    setIsRunning(false)
  }
  const handleShortBreak = () => {
    setTimerMode('ShortBreak')
    setTimeLeft(15 * 60)
    setIsRunning(false)
  }

  const handleBreak = () => {
    setTimerMode('Break')
    setTimeLeft(5 * 60)
    setIsRunning(false)
  }
  return (
    <div className='Focus'>
      <div className="mainpart">
        <div className="buttons">
          <button type='button' onClick={handlePomodoro}>Pomodoro</button>
          <button type='button' onClick={handleShortBreak}>Short Break</button>
          <button type='button' onClick={handleBreak}>Long Break</button>
        </div>
        <div className="timer">{formatTime(timeLeft)}</div>
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