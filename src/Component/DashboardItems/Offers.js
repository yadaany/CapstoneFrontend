import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footersmall from '../Footersmall'
import NavbarDash from '../Navbars/NavbarDash'
import offer from '../../Images/offer.png'

const Offers = () => {
  const styledlinked = { color: "white", "textDecoration": "none", marginLeft: 'auto' };
  const styledbutton = { backgroundColor: "#401664", marginBottom: "10px", border:'none' }

  return (
    <div>
        <NavbarDash/>

        <Card.Img variant="top" src={offer} />

        <div class='container text-white'>

        <Card className="text-center mb-2 " style={{backgroundColor: '#C8B9D6'}}>
      <Card.Header>Platinum offer</Card.Header>
      <Card.Body>
        <Card.Title>0% Interest Rate</Card.Title>
        <Card.Text>
          If you have excellent credit score i.e greater than 750. You are eligible for interest free loan.
        </Card.Text>
        <Button style={styledbutton}><Link style={styledlinked} to='/applicationForm'>Apply Now</Link></Button>
      </Card.Body>
    </Card>

    <Card className="text-center mb-2 bg-warning">
      <Card.Header>Gold offer</Card.Header>
      <Card.Body>
        <Card.Title>0% Interest rate for first year.</Card.Title>
        <Card.Text>
        If you have very good credit score i.e greater than 700 and less than 750. Your loan will be interest free for first year.
        </Card.Text>
        <Button style={styledbutton}><Link style={styledlinked} to='/applicationForm'>Apply Now</Link></Button>
      </Card.Body>
    </Card>

    <Card className="text-center mb-2 bg-success">
      <Card.Header>Silver offer</Card.Header>
      <Card.Body>
        <Card.Title>8% interest rate</Card.Title>
        <Card.Text>
        If your credit score is greater than 600 and less than 700. Your loan will be financed with 8% interest.
        </Card.Text>
        <Button style={styledbutton}><Link style={styledlinked} to='/applicationForm'>Apply Now</Link></Button>
      </Card.Body>
    </Card>

    <Card className="text-center mb-2 bg-secondary">
      <Card.Header>Bronze offer</Card.Header>
      <Card.Body>
        <Card.Title>12% interest rate</Card.Title>
        <Card.Text>
        If your credit score is greater than 500 and less than 600. Your loan will be financed with 12% interest.
        </Card.Text>
        <Button style={styledbutton} ><Link style={styledlinked} to='/applicationForm'>Apply Now</Link></Button>
      </Card.Body>
    </Card>
    </div>
        
      <Footersmall/>  
    </div>
  )
}

export default Offers