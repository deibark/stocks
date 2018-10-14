import React from 'react'

const ErrorComponent = ({ error }) => {

  if(!error) {
    return null
  }

  return(
    <div style={{ color: 'red', fontWeight: '600'}}>
      <p>{ error.status } - { error.statusText } </p>
    </div>
  )
}

export default ErrorComponent
