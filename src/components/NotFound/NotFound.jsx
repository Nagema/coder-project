import React from 'react';
import Image from 'react-bootstrap/Image'
import NotFoundImg from '../../assets/NotFoundImg.png'

import './styles.css'

export function NotFound() {

  return (
      <div>
        <Image className='notFoundImage' src={NotFoundImg} alt="not found"/>
      </div> 
  )
}