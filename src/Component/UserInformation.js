import React from 'react'
import { Card } from 'react-bootstrap'

const UserInformation = () => {

    const userdetails=JSON.parse(localStorage.getItem('user'));
  return (
    <div>
        <Card>
        <Card.Body>
            <h2>Welcome {userdetails.name}</h2>
          {/* <Card.Title>Account Summary</Card.Title> */}
          {/* <Card.Text>Customer number: ******0001</Card.Text> */}
          <Card.Text>Email address- {userdetails.emailid}</Card.Text>
          <Card.Text>Last login: 9.07 A.M. Wednesday 24 November 2022 UK time</Card.Text>
        </Card.Body>
      </Card>
      
    </div>



    
  )
}

export default UserInformation