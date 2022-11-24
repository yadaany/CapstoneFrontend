import React from 'react'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footersmall from '../Footersmall';
import NavbarDash from '../Navbars/NavbarDash';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AccountBox, Person } from '@mui/icons-material';

const Profile = () => {

    // const userdetails=JSON.parse(localStorage.getItem('userloandetails'));
    const user=JSON.parse(localStorage.getItem('user'));
    const styledlinked = { color: "white", "textDecoration": "none", marginLeft: 'auto' };
    const styledbuttonNav = { backgroundColor: "#401664", marginBottom: "50px", marginLeft: 'auto', border:"none"  }
    const styledtablehead={backgroundColor:'#401664', color:'white', textAlign:'center'}
    const styledtable={ textAlign:'center', marginBottom:"50px", marginTop:"50px", color:'#401664'}


  return (
    <div>
          {/* if no solutiom found remove get requeest and show only user data from local storage */}

<NavbarDash/>

      <Container>
        <Row className="mt-4 pt-4 " style={{marginBottom:50}}>
          <Col lg={4} md={6} sm={9} style={{ backgroundColor: '#D9D9D6', borderRadius: '3%'}} className="p-3 m-auto shadow-lg rounded-lg " >
          <div>
          <h3 style={{  borderRadius: '3%', color:'#401664'}}><AccountBox fontSize='large'/> Personal Information </h3>
          </div>
      
          
            <Table  bordered  style={styledtable} >
          {/* <thead >
            <tr>
              <th style={styledtablehead} colSpan={2}><h4><Person fontSize='large'/> Personal Information </h4></th>
            </tr>
          </thead> */}

          <tbody>
            <tr>
              <td>Name</td>
              <td>{user.name}</td>
            </tr>

            {/* <tr>
            <td>Age</td>
              <td>{userdetails.age}</td>
            </tr> */}

            {/* <tr>
              <td>Account Number</td>
              <td>yet to give</td>
            </tr> */}

            <tr>
            <td>Email address</td>
              <td>{user.emailid}</td>
            </tr>

            <tr>
              <td>Username</td>
              <td>{user.username}</td>
            </tr>

          {/* <tr>
            <td>Employement</td>
              <td>{userdetails.emptype}</td>
            </tr> */}

            {/* <tr>
              <td>PAN Details</td>
              <td>{userdetails.pan}</td>
            </tr> */}

            <tr>
              <td>Mobile No.</td>
              <td>{user.mobile}</td>
            </tr>

          </tbody>

        </Table>
        <Button style={styledbuttonNav}><Link style={styledlinked} to='/dashboard'><ArrowBackIcon/>Return to dashboard</Link></Button>
      </Col>
      
        </Row>
      </Container>
   

     <div className='mt-5'>
    <Footersmall/>
    </div>  
    </div>
  )
}

export default Profile