import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './styles.css';

function LoadingComponent() {

  return (
    <div className='spinner'>
      <Spinner animation="border" variant="secondary" />
    </div>
  )
}

export default LoadingComponent