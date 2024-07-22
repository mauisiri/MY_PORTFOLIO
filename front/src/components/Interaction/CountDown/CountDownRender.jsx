import React from "react";
import "./CountDown.css";
import CountDown from "./CountDown";
import TimerChallenge from "./TimerChallenge";

const CountDownRender = () => {
  return (
    <div>
    <React.StrictMode>
      <>
      <CountDown />
      <section className="countDownbody">
        <TimerChallenge title='Easy' targetTime={1}/>
        <TimerChallenge title='Not easy' targetTime={5}/>
        <TimerChallenge title='Getting tough' targetTime={10}/>
        <TimerChallenge title='Pros only' targetTime={15}/>
      </section>
      </>
    </React.StrictMode>
    </div>
   
  );
}

export default CountDownRender;
