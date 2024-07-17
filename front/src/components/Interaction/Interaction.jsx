import React from 'react'
import TicTacToe from "../TicTacToe/TicTacToe";
import SectionTitle from '../SectionTitle/SectionTitle';
import './Interaction.css';



  const Interaction = () => {
    return (
      <div className='interaction' id='interaction'>
          <SectionTitle title="INTERACT WITH SOME APPS"/>
          <TicTacToe />
      </div>
    )
  }

export default Interaction
