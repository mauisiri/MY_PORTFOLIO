import React from "react";
import "./CountDown.css";
import CountDown from "./CountDown";
import TimerChallenge from "./TimerChallenge";

const CountDownRender = () => {
  return (
    <React.StrictMode>
      <>
        <section className="countDownbody">
          <div className="countDown-container">
            <CountDown />
          </div>
          <div className="countDownChallenges-container">
            <TimerChallenge title="Easy" targetTime={1} />
            <TimerChallenge title="Not easy" targetTime={5} />
            <TimerChallenge title="Getting tough" targetTime={10} />
            <TimerChallenge title="Pros only" targetTime={15} />
          </div>
        </section>
      </>
    </React.StrictMode>
  );
};

export default CountDownRender;
