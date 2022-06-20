import React from 'react'
import './styles.css'
import Carousel from 'react-bootstrap/Carousel';
import WelcomeBanner from '../../assets/welcomeBanner.png'
import MainTemplate from '../../assets/mainTemplate.png';
import WorkingInProgress from '../../assets/workingInProgress.png'

const WelcomePage = ({ welcome, gretting, note }) => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={WelcomeBanner}
            alt="First slide"
          />
          <div className='carousel-caption welcome'>
            <h1>{welcome}</h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={MainTemplate}
            alt="Second slide"
          />
          <div className='carousel-caption gretting'>
            <h1>{gretting}</h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={WorkingInProgress}
            alt="Third slide"
          />
          <div className='carousel-caption note'>
            <h1>{note}</h1>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default WelcomePage