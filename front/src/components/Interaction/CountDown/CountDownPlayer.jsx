import { useState, useRef } from 'react';

export default function CountDownPlayer() {
    const countDownPlayerName = useRef();

    const [enteredPlayerName, setEnteredPlayerName] = useState("");

    function handleClick() {
        const inputValue = countDownPlayerName.current.value;
        const capitalizedWords = inputValue.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        
        setEnteredPlayerName(capitalizedWords);
        countDownPlayerName.current.value = "";
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
          handleClick();
        }
    }      

    return (
      <section id="countDownPlayer">
        <h2>Welcome, {enteredPlayerName ? enteredPlayerName : 'dude'}!</h2>
        <p>
          <input 
            ref={countDownPlayerName} 
            type="text"
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleClick}>Set your name</button>
        </p>
      </section>
    );
}
