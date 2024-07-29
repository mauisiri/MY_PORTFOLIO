import React from 'react'
import './Interaction.css';
import TicTacToe from "./TicTacToe/TicTacToe";
import SectionTitle from '../SectionTitle/SectionTitle';
import CountDownRender from './CountDown/CountDownRender';
import TimerChallenge from './CountDown/TimerChallenge';
import InteractionCarousel from './InteractionCarousel';


  const Interaction = () => {
    return (
      <div className='interaction' id='interaction'>
          <SectionTitle title="INTERACT WITH SOME APPS"/>
          <InteractionCarousel />
          <TicTacToe />
          <CountDownRender />
      </div>
    )
  }

export default Interaction
