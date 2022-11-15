import React from 'react'

const RejectionTemplate = () => {

  const userdetails = JSON.parse(localStorage.getItem('formData'));

  return (
    <div>
      <div className='container mt-5'>
      <h2>Thank you for applying for the loan</h2> 
      <h3>After analysing your information we are sorry to inform you that you are not eligible loan.</h3> 
      <p>You can contact us on our toll free number 1800 123 4579 for any further queries.</p>
      </div>


    </div>
  )
}

export default RejectionTemplate