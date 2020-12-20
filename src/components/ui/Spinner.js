import React from 'react'
import loader from './../../img/spinner.gif'

const Spinner = () => {
  return (
    <img src={loader} alt="loading" style={{ width: '200px', margin: 'auto', display: 'block' }} />
  )
}

export default Spinner