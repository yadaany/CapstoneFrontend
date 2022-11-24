import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import app from '../../Images/app.png'
import NavbarDash from '../Navbars/NavbarDash';


const ApplicationForm = () => {

  const [employment, setEmployment] = useState("");
  const [income, setIncome] = useState("");
  const [service, setService] = useState("");
  const [tenure, setTenure] = useState("");
  const [cibil, setCibil] = useState("");
  const [loan, setLoan] = useState(0);
  const [car, setCar] = useState("");
  const [age, setAge] = useState(0);
  const [pan, setPan] = useState("");
  const [error, seterror] = useState("");
  const [account, setAccount] = useState(0);
  const [bank, setBank] = useState("");

  /////////----------------------------------Styling---------------------------------------------------------------------------------------------------------//////
  const styledbutton = { backgroundColor: "#009688", marginBottom: "10px", marginLeft: 'auto' };
  const styledlinked = { color: "white", "textDecoration": "none", marginLeft: 'auto' };
  const styledNav = { backgroundColor: "#401664", padding: 5 }
  const styledbuttonNav = { backgroundColor: "#401664", marginBottom: "10px", marginLeft: 'auto' }
  const styleheading = { color: "white", marginLeft: 'auto' }
  const stylebtn = { backgroundColor: "#ee2033", border: 'none' }
  const styledrequirement = { backgroundColor: "#401664", color: 'white', margin: 1 };

  ////-----------------------------------variables for emi calculation and form validations----------------------------------------------------------//  
  let emi = '';      //---------->for interest free loan-------/
  let emi2 = '';      //---------->for first year free interest-------/
  let emi3 = '';      //----------->for standard ineterest rate-------//
  let r = 8 / 1200;     //---------->standard monthly rate of interest-------/
  let r1 = 12 / 1200;   //----------->higher interest rate for low cibil-----/
  let message = '';
  let t = tenure * 12;    ///--------tenure in months----------------/////
  let minloan = 200000;
  let maxloan1 = 1000000;
  let maxloan2 = 2000000;
  let maxloan3 = 5000000;
  let minAge = 20;
  let maxAge = 60;
  let regexforalphanumeric = /[A-Za-z0-9]{10}/
  let regexforalphanumericcar = /[A-Za-z0-9]/


  //-------------------------------------------functions to handle form data--------------------------------------------------------------------/// 
  const navigate = useNavigate();
  const userdetails = JSON.parse(localStorage.getItem('user'));

   const handleLoandetails = (e) => {
    e.preventDefault();
    console.log(income);

//---------form validation and EMI calculation------// 

    if (age < minAge || age > maxAge) {
      alert("Minimum age 20 and Maximum age 60")
    }

    else if (!regexforalphanumeric.test(pan)) {
      alert("Pan card length must be between 10 characters, Only Alpha-numeric allowed")
    }

    else if (loan < minloan) {
      alert("Minimum amount for Loan is 2 lakhs")
    }

    else if (income == "03 to 05" && (loan >= maxloan1)) {
      console.log(loan);
      // seterror("Enter a lower amount")
      alert("You are not eligible for more than 10 lakh")
    }

    else if (income == "05 to 10" && (loan >= maxloan2)) {
      console.log(loan);
      // seterror("Enter a lower amount")
      alert("You are not eligible for more than 20 lakh")
    }

    else if (income == "more than 10" && (loan >= maxloan3)) {
      console.log(loan);
      // seterror("Enter a lower amount")
      alert("You are not eligible for more than 50 lakh")
    }

    else if (!regexforalphanumericcar.test(car)) {
      console.log(car);
      alert("Enter a valid car name")
    }

    else if (cibil == "750 or more") {
      emi = Math.round(loan / (tenure * 12))
      message = "You are selected for interest free loan"
      alert('Congratulations!! Your loan has been approved');
      navigate("/interestFreeLoan")
    }

    else if (cibil == "700-749") {
      emi = Math.round(loan / (tenure * 12))
      emi2 = Math.round(loan * r / (1 - (Math.pow(1 / (1 + r), t))));
      message = "Congratulations your loan has been approved . As you have good credit rating your first year interest will be free. From second year you will be paying Standar Interest rate "
      alert('Congratulations!! Your loan has been approved');
      navigate("/firstYearFree")
    }

    else if (cibil == "600-699") {

      emi3 = Math.round(loan * r / (1 - (Math.pow(1 / (1 + r), t))))
      alert('Congratulations!! Your loan has been approved');
      navigate("/withInterest")

    }

    else if (cibil == "500-599") {
      emi3 = Math.round(loan * r1 / (1 - (Math.pow(1 / (1 + r1), t))))
      alert('Congratulations!! Your loan has been approved');
      navigate("/highinterest")
    }

    else {
      message = "Thanks for applying. Unfortunately you are not eligible for Loan due to very Low Credit rating."
      navigate("/rejectionTemplate")
    }

    let addrecord =

    {
      "name": userdetails.name,
      "mobile": userdetails.mobile,
      "age": age,
      "pan": pan,
      "emptype": employment,
      "income": income,
      "service": service,
      "tenure": tenure,
      "cibil": cibil,
      "loan": loan,
      "carname": car,
      "account": account,
      "bank": bank
    }

    let emidata = {
      emi,
      emi2,
      emi3
    }
    localStorage.setItem("emidata", JSON.stringify(emidata))
    let token = JSON.parse(localStorage.getItem('token'));
    console.log(addrecord)
    console.log(emidata)

    let localuser = localStorage.setItem("formData", JSON.stringify(addrecord));

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Access-Control-Allow-Origin': 'http://localhost:8091'

    }

    axios.post(`/appData`, addrecord, {
      headers: headers
    }
    )
      .then(response => {
        console.log(response);

      })
      .catch(function (error) {
        console.log(error);
      })

  }


  return (
    <div style={{ backgroundColor: "#D9D9D6" }}>

      <NavbarDash />

      <Container style={{ color: "#401664", marginTop: '20px', textAlign: 'left', padding: 5 }} className="col-md-6">
        <Card>
          <Card.Body>
            <h2 style={{ textAlign: 'center' }}>Car Loan Application Form <img src={app} width='80' height='80' /></h2>
            <Form onSubmit={handleLoandetails}>

              <Row className="g-2">
                <Col md>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label>

                    <Form.Control type="text" placeholder={userdetails.name} required size="sm" disabled />

                  </Form.Group>

                </Col>
                <Col md>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Mobile No</Form.Label>

                    <Form.Control type="text" placeholder={userdetails.mobile} required size="sm" disabled />

                  </Form.Group>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="number" placeholder={userdetails.emailid} required size="sm" onChange={(e) => setLoan(e.target.value)} disabled />
                  </Form.Group>
                </Col>

                <Col md>
                  <Form.Group className="mb-3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter your age" required size="sm" onChange={(e) => setAge(e.target.value)} />

                  </Form.Group>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                  <Form.Group className="mb-3">
                    <Form.Label>PAN Details</Form.Label>
                    <Form.Control type="text" placeholder="Enter your PAN Card number" style={{ "text-transform": "uppercase" }} required size="sm" onChange={(e) => setPan(e.target.value)} />
                  </Form.Group>
                </Col>

                <Col md>
                  <Form.Group className="mb-3">
                    <Form.Label>CIBIL Score</Form.Label>
                    <Form.Select size="sm" value={cibil} required onChange={(e) => setCibil(e.target.value)}>
                      <option value="" disabled >Select*</option>
                      <option>750 or more</option>
                      <option>700-749</option>
                      <option>600-699</option>
                      <option>500-599</option>
                      <option>less than 500</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

              </Row>


              <Row className="g-2">
                <Col md>
                  <Form.Group className="mb-3">
                    <Form.Label>Type of employment</Form.Label>
                    <Form.Select size="sm" value={employment} required onChange={(e) => setEmployment(e.target.value)}>
                      <option value="" disabled >Select*</option>
                      <option>Salaried</option>
                      <option>Self Employed</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md>
                  <Form.Group className="mb-3">
                    <Form.Label>Years of Service</Form.Label>
                    <Form.Select size="sm" value={service} required onChange={(e) => setService(e.target.value)}>
                      <option value="" disabled >Select*</option>
                      <option>01 to 05</option>
                      <option>05 to 10</option>
                      <option>more than 10</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>


              <Row className="g-2">
                <Col md>
                  <Form.Group className="mb-3">
                    <Form.Label>Yearly income in lakhs ₹</Form.Label>
                    <Form.Select size="sm" value={income} required onChange={(e) => setIncome(e.target.value)}>
                      <option value="" disabled >Select*</option>
                      <option>03 to 05</option>
                      <option>05 to 10</option>
                      <option>more than 10</option>
                    </Form.Select>
                  </Form.Group>

                </Col>

                <Col md>
                  <Form.Group className="mb-3">
                    <Form.Label>Loan Amount ₹</Form.Label>

                    <Form.Control type="number" placeholder="Enter Loan Amount ₹" required size="sm" onChange={(e) => setLoan(e.target.value)} />
                    <span style={{ color: "red" }}>{error}</span>
                  </Form.Group>
                </Col>
              </Row>


              <Row className="g-2">
                <Col md>
                  <Form.Group className="mb-3">
                    <Form.Label>Tenure</Form.Label>
                    <Form.Select size="sm" value={tenure} required onChange={(e) => setTenure(e.target.value)}>
                      <option value="" disabled >Select*</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md>
                  <Form.Group className="mb-3">
                    <Form.Label>Car Name</Form.Label>

                    <Form.Control type="text" placeholder="Brand-Model" required size="sm" onChange={(e) => setCar(e.target.value)} />

                  </Form.Group>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                  <Form.Group className="mb-3">
                    <Form.Label>Preffered Bank Acount for EMI deduction</Form.Label>
                    {/* <Form.Select size="sm" value={tenure} required onChange={(e) => setTenure(e.target.value)}> */}
                    <Form.Select size="sm" onChange={(e) => setBank(e.target.value)}>
                      <option value="" disabled selected>Select*</option>
                      <option>NatWest</option>
                      <option>HDFC</option>
                      <option>Axis Bank</option>
                      <option>Citi Bank</option>


                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md>
                  <Form.Group className="mb-3">
                    <Form.Label>Account Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter account number" required size="sm" onChange={(e) => setAccount(e.target.value)} />
                  </Form.Group>
                </Col>
              </Row>

              <Button style={styledbutton} type="submit">
                Submit
              </Button>

            </Form>
          </Card.Body>
        </Card>
      </Container>

{/* --------------------------------------------footer------------------------------------------------------------------------ */}

      <footer className="d-flex flex-wrap justify-content-between align-items-center p-4 border-top">
        <div className="col-md-8 d-flex align-items-center">
          <p><i> © 2005-2022 National Westminster Bank plc</i></p>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <p><i>Follow Us on
          </i></p>
          <li className="ms-3"><a href="#"><svg style={{ backgroundColor: 'white' }} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z" /></svg></a></li>
          <li className="ms-3"><a href="#"><svg style={{ backgroundColor: 'white' }} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" /></svg></a></li>
          <li className="ms-3"><a href="#"><svg style={{ backgroundColor: 'white' }} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" /></svg></a></li>
        </ul>
      </footer>


    </div>




  )
}

export default ApplicationForm