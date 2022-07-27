import React, { Fragment } from 'react'
import './styles.css'
import Carousel from 'react-bootstrap/Carousel';
import WelcomeBanner from '../../assets/welcomeBanner.png'
import MainTemplate from '../../assets/mainTemplate.png';
import WorkingInProgress from '../../assets/workingInProgress.png'
import ItemListContainer from '../ItemListContainer';
import constants from '../../utils/constants';

const WelcomePage = ({ welcome, gretting, note }) => {
  return (
    <Fragment>
      <div className='carousel-wrap'>
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
      <div className='all-products-wrapper'>
        <h1 className='all-products'>{constants.seeWhatsSelling}</h1>
        <ItemListContainer/>
      </div>
    </Fragment>
  )
}

export default WelcomePage