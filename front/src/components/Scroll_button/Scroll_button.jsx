import React, { useRef } from 'react';


function Scroll_button() {
    const handleScrollToContact = () => {
      const element = document.getElementById("contact");
      element.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <button className="btn_contact_me" onClick={handleScrollToContact}></button>
    );
  }


export default Scroll_button