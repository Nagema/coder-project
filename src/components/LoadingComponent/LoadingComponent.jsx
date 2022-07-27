import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './styles.css';

function LoadingComponent() {

  const [loading, setLoading] = useState();

  useEffect(() => {
    setTimeout(() =>{
      setLoading(false)
    }, 2500)
  }, [])

  return (
    <div className='spinner'>
      {loading && <Spinner animation="border" variant="secondary" /> }
    </div>
  )
}

export default LoadingComponent