import { useState } from 'react';

export default function TimerChallenge({title, targetTime}) {

    const [timerStarted, setTimerStarted] = useState(false);
const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        setTimeout(() => 
            {setTimerExpired(true);},
            targetTime * 1000);
            setTimerStarted(true);
    }

    function handleStop() {
        
    }
    
    return (
        <section className='countDownChallenge'>
            <h2>{title}</h2>
            {timerExpired && <p>Try it again!</p>}
            <p className='countDownChallenge-time'>
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    )
}
