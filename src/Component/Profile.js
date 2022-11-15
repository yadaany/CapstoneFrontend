import React from 'react'

const Profile = () => {

    const userdetails=JSON.parse(localStorage.getItem('userloandetails'));

  return (
    <div>Profile

    <h1>{userdetails.loan}</h1>


    </div>
  )
}

export default Profile