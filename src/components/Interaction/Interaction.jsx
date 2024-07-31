import React from 'react'
import './Interaction.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import InteractionCarousel from './InteractionCarousel';


  const Interaction = () => {
    return (
      <div className='interaction' id='interaction'>
          <SectionTitle title="INTERACT WITH SOME APPS"/>
          <InteractionCarousel />
      </div>
    )
  }

export default Interaction
