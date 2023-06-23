import React, { useRef } from 'react';
import { Button } from 'reactstrap';
import { animateScroll as scroll } from 'react-scroll';
import Contact from '../Contact/Contact';


const Scroll_button = ({ to }) => {
  const onClick = () => {
      scroll.scrollTo(to, { smooth: true, duration: 500 });
  };

  return (
    <Button color="primary" onClick={onClick}>
      Contact
    </Button>
  );
}
  

export default Scroll_button;