import React, { useRef } from 'react';


function Scroll_button() {
    const handleScrollToContact = () => {
      const element = document.getElementById("contact");
      element.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <button onClick={handleScrollToContact}>Contact</button>
    );
  }


export default Scroll_button