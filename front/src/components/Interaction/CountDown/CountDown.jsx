import CountDownPlayer from "./CountDownPlayer";

function CountDown() {
  return (
    <>
     <noscript> You need to enable JavaScript to run this app. </noscript>
            <div id="countDowncontent">
                <header>
                    <h1>The <em>Almost</em> Final Countdown</h1>
                    <p>Stop the timer once you estimate that time is (almost) up</p>
                </header>
            <div id="root"></div>
        </div>
        <CountDownPlayer />
        <div id="countDownChallenges"></div>
    </>
  );
}

export default CountDown;
