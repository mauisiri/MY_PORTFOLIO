import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import codeMonsterPic from '../../assets/ShoppingCart/seniorMonster.png';
import ticTacToePic from '../../assets/interactionPics/ticTacToe.png';
import timerCallengePic from '../../assets/interactionPics/timerChallenge.png';
import './InteractionCarousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TicTacToe from './TicTacToe/TicTacToe';
import CountDownRender from './CountDown/CountDownRender';

function InteractionCarousel() {
  const [openGame, setOpenGame] = useState(null);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = [
    {
      title: 'Tic Tac Toe',
      img: ticTacToePic,
      gameComponent: <TicTacToe />,
    },
    {
      title: 'Timer Challenge',
      img: timerCallengePic,
      gameComponent: <CountDownRender />,
    },
    {
      title: 'Code Monster',
      img: codeMonsterPic,
      onClick: () => navigateToShoppingCart(),
    },
  ];

  const navigateToShoppingCart = () => {
    navigate('/shoppingcart');
    window.scrollTo(0, 0);
  };

  const handlePlayClick = (gameIndex) => {
    setOpenGame(gameIndex);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.popup')) {
      setOpenGame(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openGame]);

  return (
    <div className="carouselInteractionBox">
      <div className="carouselInteractionCard">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div className="carouselInteractionCardBoxWrapper" key={index}>
              <div className="carouselInteractionCardBox">
                <div className="carouselInteractionImg">
                  <h1>{d.title}</h1>
                  <img src={d.img} alt={d.title} />
                </div>
                <div className="carouselInteractionTitle">
                  {d.onClick ? (
                    <button onClick={d.onClick}>Play</button>
                  ) : (
                    <button onClick={(event) => {
                      event.stopPropagation();
                      handlePlayClick(index);
                    }}>
                      Play
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {openGame === 0 && (
        <div className="popup">
          <div className="popup-content">{data[0].gameComponent}</div>
        </div>
      )}

      {openGame === 1 && (
        <div className="popup">
          <div className="popup-content">{data[1].gameComponent}</div>
        </div>
      )}
    </div>
  );
}

export default InteractionCarousel;
