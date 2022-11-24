import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';


import dfirst from '../../Images/dfirst.png'
import dsecond from '../../Images/dsecond.png'
import dthird from '../../Images/dthird.png'
import NavbarDash from '../Navbars/NavbarDash';
import Sidebar from './Sidebar';
import LoanEMICalculator from '../../LoanCalculator/LoanEMICalculator';
import Footersmall from '../Footersmall';
import DashMain from './DashMain';


const Dashboard = () => {

  // const [selectemp, setSelectemp] = useState("select*");
  // const [selectincome, setselectincome] = useState("");
  // const [selectservice, setselectservice] = useState("");
  // const [selectTenure, setSelectTenure] = useState("");
  // const [name, setName] = useState("");

  // const [cibil, setCibil] = useState("");
  // const [income, setIncome] = useState("");
  // const [loan, setLoan] = useState("");
  // const [car, setCar] = useState("");


  const userdetails = JSON.parse(localStorage.getItem('user'));

  const styledbutton = { backgroundColor: "#009688", marginBottom: "10px", marginLeft: 'auto' };
  const styledlinked = { color: "white", "textDecoration": "none", marginLeft: 'auto' };
  const styledNav = { backgroundColor: "#401664", padding: 5 }
  const styledbuttonNav = { backgroundColor: "#401664", marginBottom: "10px", marginLeft: 'auto' }
  const styleheading = { color: "white", marginLeft: 'auto' }
  // const stylebtn={backgroundColor:"#d71c2b"}
  const stylebtn = { backgroundColor: "#ee2033", border: 'none' }
  const styledrequirement = { backgroundColor: "#401664", margin: 1 };

  //   const navigate = useNavigate();
  //  const deletetoken = () => {
  //    localStorage.removeItem("token")
  //    localStorage.removeItem("user")
  //    localStorage.removeItem("formData");
  //      navigate("/")
  //   }



  return (
    <div>

      <NavbarDash />

      <div className='d-flex'>

        <div className='col-2'  >
          <Sidebar />
        </div>


        <div className='col-10 my-1' >
          {/* <Card border='none' style={{backgroundColor:"#D6CFC7"}}> */}
          <DashMain />

          <div className='d-md-flex' >
            <Card className='m-1' >
              <Card.Img variant="top" src={dfirst} />
              <Card.Body>
                <Button style={stylebtn} ><Link style={styledlinked} to='/offers'>Check eligibility</Link></Button>
              </Card.Body>
            </Card>

            <Card className='m-1'>
              <Card.Img variant="top" src={dsecond} />
              <Card.Body>
                <Button style={stylebtn}><Link style={styledlinked} to='/applicationForm'>Application form</Link></Button>
                {/* <Button variant="primary">Check eligibility</Button> */}
              </Card.Body>
            </Card>

            <Card className='m-1' >
              <Card.Img variant="top" src={dthird} />
              <Card.Body>
                <Button style={stylebtn} ><Link style={styledlinked} to='/loans'>Check Status</Link></Button>
              </Card.Body>
            </Card>
          </div>


          {/* <div  className='container d-md-flex text-center my-3' > */}


          <div>
            <Card  style={{ textAlign: 'left' }}  >
              <Card.Header style={{ backgroundColor: '#410C41', color: 'white', textAlign: 'center' }}><h2>Applying for a Loan is easy</h2></Card.Header>
              {/* <h2 style={{padding:'10px'}}>Applying for a Loan is easy!</h2> */}


              <Card border='light' style={{ color: '#401664' }} >
                <Card.Body>
                  <div className='row'>
                    <div className='col-sm-8 text-left'>
                      <Card.Title>Check Car Loan offers</Card.Title>
                      <Card.Text >Checkout the best offers for you</Card.Text>
                      <Card.Title>Tell us a bit about your personal and employment details.</Card.Title>
                      <Card.Text >Mention your personal and employment Details</Card.Text>
                      <Card.Title>Add car details.</Card.Title>
                      <Card.Text>Let us know about the car your choice. Apply for loan as per your choice of car</Card.Text>
                      <Card.Title>Complete your application process for disbursement of loan.</Card.Title>
                      <Card.Text>Fill the application form with all the required fields</Card.Text>
                      <Card.Title>Complete your KYC.</Card.Title>
                      <Card.Text>Complete your KYC from the comfort of your home. We will send you a personalised link to upload KYC documents.</Card.Text>
                </div>

                
                <div className='col-sm-4 '>
                  <Card border='light'>
                    {/* <Card.Header><b>RoundsUp - Save as you spend</b></Card.Header> */}
                    <Card.Img  src='https://www.natwest.com/content/dam/natwest/personal/loans/illustrations/image.dim.180.nw-pers-ill-loan-items-on-pods-with-price-tags-trans-471x471.png'
                    />
                    {/* <Card.Text>
                      We'll round up your transactions to the nearest £1
                    </Card.Text> */}
                    {/* <Button style={stylebtn}><Link style={styledlinked} to='/applicationForm'>Check offers</Link></Button> */}
                    </Card>
                </div>
                
              </div>
            
            </Card.Body>
            </Card>
            </Card>

          </div>

          <div id='emicalculatorDash'>
            <LoanEMICalculator />
          </div>
        </div>
      </div >

      <div style={{ backgroundColor: "#401664", color: "white" }}>
        <Footersmall />
      </div>

    </div>
  )
}

export default Dashboard