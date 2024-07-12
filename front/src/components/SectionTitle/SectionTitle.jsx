import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title}) => {
  return (
    <div className='section_div'>
        <hr />
        <span className='header'>{title}</span>
    </div>
  );
};

export default SectionTitle;
