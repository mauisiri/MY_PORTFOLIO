import React from 'react'
import './Interaction.css';
import TicTacToe from "./TicTacToe/TicTacToe";
import SectionTitle from '../SectionTitle/SectionTitle';
import CountDownRender from './CountDown/CountDownRender';
import TimerChallenge from './CountDown/TimerChallenge';


  const Interaction = () => {
    return (
      <div className='interaction' id='interaction'>
          <SectionTitle title="INTERACT WITH SOME APPS"/>
          <TicTacToe />
          <CountDownRender />
      </div>
    )
  }

export default Interaction
