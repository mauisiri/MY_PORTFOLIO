import React from 'react';
import TicTacToePic from "../../assets/interactionPics/ticTacToe.png";
import TimerCallengePic from "../../assets/interactionPics/timerChallenge.png";
import './InteractionCarousel.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function InteractionCarousel() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow:3,
    slideToScroll:3
  };

  const data = [
    {
      title: `Tic Tac Toe`,
      img: TicTacToePic,
    },
    {
      title: `Timer Challenge`,
      img: TimerCallengePic,
    },
  ];

  return (
    <div className='carouselInteractionBox'>
      <div className='carouselInteractionCard'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div className='carouselInteractionCardBox'>
              <div className='carouselInteractionImg'>
              <h1>{d.title}</h1>
                <img src={d.img} alt={d.title} />
              </div>
                <div className='carouselInteractionTitle'>
                  <button>Play</button>
                </div>
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default InteractionCarousel;
