import { useState, useRef } from 'react';

export default function CountDownPlayer() {
    const countDownPlayerName = useRef();

    const [enteredPlayerName, setEnteredPlayerName] = useState(null);

    function handleClick() {
        // const capitalizedWords = enteredPlayerName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setEnteredPlayerName(countDownPlayerName.current.value);
        countDownPlayerName.current.value = "";
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
          handleClick();
        }
      }      

    return (
      <section id="countDownPlayer">
        <h2>Welcome, {enteredPlayerName ?? 'dude'}!</h2>
        <p>
          <input 
            ref={countDownPlayerName} 
            type="text"
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleClick}>Set Name</button>
        </p>
      </section>
    );
}
