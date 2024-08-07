import { useState, useRef, useEffect } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const [isRunning, setIsRunning] = useState(false); // Estado para controlar si el temporizador está corriendo

  useEffect(() => {
    if (timeRemaining <= 0 && isRunning) {
      clearInterval(timer.current);
      setIsRunning(false);
      dialog.current.open();
    }
  }, [timeRemaining, isRunning]);

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
    setIsRunning(true);
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
    setIsRunning(false); // Asegurarse de detener el temporizador al resetear
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
    setIsRunning(false);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <div className="countDownChallenge-container">
        <section className="countDownChallenge">
          <h2>{title}</h2>
          <p className="countDownChallenge-time">
            {Math.round(timeRemaining / 1000)} second{targetTime > 1 ? "s" : ""}
          </p>
          <p>
            <button onClick={isRunning ? handleStop : handleStart}>
              {isRunning ? "Stop" : "Start"} Challenge
            </button>
          </p>
          <p className={isRunning ? "active" : undefined}>
            {isRunning ? "Time is running..." : "Timer inactive"}
          </p>
        </section>
      </div>
    </>
  );
}
