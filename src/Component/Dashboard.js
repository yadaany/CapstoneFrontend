import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Nav, Navbar, NavDropdown, NavItem, Row, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../Redux/User';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Sidebar from './Sidebar';
import dfirst from '../Images/dfirst.png'
import dsecond from '../Images/dsecond.png'
import dthird from '../Images/dthird.png'
import UserInformation from './UserInformation';
import LoanEMICalculator from '../LoanCalculator/LoanEMICalculator';
import { Stack } from '@mui/system';
import Footersmall from './Footersmall';


const Dashboard = () => {

  const [selectemp, setSelectemp] = useState("select*");
  const [selectincome, setselectincome] = useState("");
  const [selectservice, setselectservice] = useState("");
  const [selectTenure, setSelectTenure] = useState("");
  const [name, setName] = useState("");

  const [cibil, setCibil] = useState("");
  const [income, setIncome] = useState("");
  const [loan, setLoan] = useState("");
  const [car, setCar] = useState("");

  // let formula1=(Math.round(loan/(selectTenure*12)));
  // const [emi, setEmi]=useState("");


  const styledbutton = { backgroundColor: "#009688", marginBottom: "10px", marginLeft: 'auto' };
  const styledlinked = { color: "white", "textDecoration": "none", marginLeft: 'auto' };
  const styledNav = { backgroundColor: "#401664", padding: 5 }
  const styledbuttonNav = { backgroundColor: "#401664", marginBottom: "10px", marginLeft: 'auto' }
  const styleheading = { color: "white", marginLeft: 'auto' }
  // const stylebtn={backgroundColor:"#d71c2b"}
  const stylebtn = { backgroundColor: "#ee2033", border: 'none' }
  const styledrequirement = { backgroundColor: "#401664", margin: 1 };

  const navigate = useNavigate();
 const deletetoken = () => {
   localStorage.removeItem("token")
   localStorage.removeItem("user")
   localStorage.removeItem("formData");
     navigate("/")
  }
  

  // let emi = '';
  // let emi2 = '';
  // let emi3 = '';
  // let r = 8 / 1200;
  // let message = '';


  // const couser = useSelector(state => state.user.value)
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // let token = couser.token
  // let username = couser.username


  // const userdetails = JSON.parse(localStorage.getItem('user'));

 

  // const [user, setuser] = useState('')



  // const handleLoandetails = (e) => {
  //   e.preventDefault();
  //   console.log(selectincome);

  //   // setEmi(Math.round(loan/(selectTenure*12)));

  //   if (selectincome == "more than 10" && cibil == "750 or more") {

  //     emi = Math.round(loan / (selectTenure * 12))
  //     message = "You are selected for interest free loan"
  //     // setEmi(Math.round(loan/(selectTenure*12)));
  //     alert('congratulations Your loan has been approved and your monthly emi will be=' + emi);
  //     navigate("/interestFreeLoan")
  //   }

  //   else if (selectincome == "05 to 10" && (cibil == "600-749" || cibil == "750 or more")) {

  //     emi = Math.round(loan / (selectTenure * 12))
  //     let t = (selectTenure) * 12
  //     // let emi2 = '';
  //     emi2 = Math.round(loan * r / (1 - (Math.pow(1 / (1 + r), t))));
  //     message = "Congratulations your loan has been approved . As you have good credit rating your first year interest will be free. From second year you will be paying Standar Interest rate "

  //     alert('Congratulations your loan has been approved . As you have good credit rating your first year interest will be freea dn emi will be: ' + emi + " "
  //       + "From second year your emi will be:" + emi2);
  //     navigate("/firstYearFree")
  //   }

  //   else if (selectincome == "0 to 05" && (cibil != "less than 500")) {

  //     let t = selectTenure * 12;
  //     // let emi4 = '';
  //     emi3 = Math.round(loan * r / (1 - (Math.pow(1 / (1 + r), t))))
  //     alert('congratulations Your loan has been approved and you have to pay 8% interest. Your emi will be=' + emi3);
  //     navigate("/withInterest")
  //   }

  //   else if (cibil == "less than 500") {
  //     message = "Thanks for applying. Unfortunately you are not eligible for Loan due to very Low Credit rating."
  //     navigate("/rejectionTemplate")
  //   }

  //   else {
  //     let t = selectTenure * 12;
  //     // let emi4 = '';
  //     emi3 = Math.round(loan * r / (1 - (Math.pow(1 / (1 + r), t))))
  //     alert('congratulations Your loan has been approved and you have to pay 8% interest. Your emi will be=' + emi3);
  //     navigate("/withInterest")

  //   }

  //   dispatch(login(
  //     {
  //       name,
  //       loan,
  //       selectTenure,
  //       emi,
  //       emi2,
  //       emi3,
  //       message
  //     }))

  // }


  return (
    <div>

      <Navbar style={styledNav} variant="dark">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfv4bu-TEUp4k4el9jvzj9oA_kbG_qaed3Y9M15C0mFAPsJh46XvoqI1mViznL5lYvQ8&usqp=CAU"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{' '}
          NatWest
        </Navbar.Brand>
        <Button style={styledbuttonNav} onClick={deletetoken}><Link style={styledlinked} to='/signin'>Log out</Link></Button>
      </Navbar>

      <div className='d-flex'>

        <div className='col-2'>
          <Sidebar />
        </div>


        <div className='col-10'>

          <div>
            <UserInformation />

            <Container className='d-md-flex justify-content-center p-1'>
              <Card className='m-1' >
                <Card.Img variant="top" src={dfirst} />
                <Card.Body>
                  <Button style={stylebtn} >Check eligibility</Button>
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
                  <Button style={stylebtn} >Check Status</Button>
                </Card.Body>
              </Card>
            </Container>
          </div>

          <div className='container-fluid' style={{ backgroundColor: 'pink' }} >
            <h2 >Applying for a Loan is easy!</h2>
            <div className='container' >
              <Card>
                <Card.Body>
                  <h4>Tell us a bit about your personal and employment details.</h4>
                  <Card.Text>Personal and Employment Detail</Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <h4>Check Car Loan offers</h4>
                  <Card.Text>Personal and Employment Detail</Card.Text>
                  <Button style={stylebtn}><Link style={styledlinked} to='/applicationForm'>Check offers</Link></Button>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <h4>Add car and dealer details</h4>
                  <Card.Text>Let us know about the car and dealer of your choice. Apply for loan as per your choice of car</Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <h4>
                    Complete your application process for disbursement of loan</h4>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <h4>
                    Complete your KYC</h4>
                  Complete your KYC from the comfort of your home.
                </Card.Body>
              </Card>
            </div>
          </div>


          <LoanEMICalculator />

        </div>
      </div>

    <Footersmall/>

    </div>
  )
}

export default Dashboard