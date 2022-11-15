import { TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { Button, Navbar } from 'react-bootstrap'
// import { Table } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const FirstYearFree = () => {

    const couser = useSelector(state => state.user.value)
    const userdetails = JSON.parse(localStorage.getItem('formData'));


    const styledbutton = { backgroundColor: "#009688", marginBottom: "10px", marginLeft: 'auto' };
    const styledlinked = { color: "white", "textDecoration": "none", marginLeft: 'auto' };
    const styledNav = { backgroundColor: "#401664", padding: 5 }
    const styledbuttonNav = { backgroundColor: "#401664", marginBottom: "10px", marginLeft: 'auto' }
    const styledname = { color: "white", marginLeft: 'auto' };


    const navigate = useNavigate();

    const deletetoken = () => {
        localStorage.removeItem("token");
        navigate("/")
    }

    const handleClick = () => {

        alert('Your application is succesfully accepted. Our agent will contact you shortly for document verification')

    }

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
                <h6 style={styledname}>Congrats!! {couser.name}</h6>


                <Button style={styledbuttonNav} onClick={deletetoken}><Link style={styledlinked} to='/signin'>Log out</Link></Button>
            </Navbar>
            <h1>
                <i>Congratulations!!
                    {couser.message}
                </i>
            </h1>

            <div className='container'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th colSpan={2}>Loan Description</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{userdetails.name}</td>
                        </tr>

                        <tr>
                            <td>Loan Amount</td>
                            <td>{userdetails.loan}</td>
                        </tr>
                        <tr>
                            <td>Loan Duration</td>
                            <td>{userdetails.selectTenure}</td>
                        </tr>

                        <tr>
                            <td>First year monthly EMI</td>
                            <td>{userdetails.emi}</td>
                        </tr>

                        <tr>
                            <td>Monthly EMI from second year</td>
                            <td>{userdetails.emi2}</td>
                        </tr>

                        <tr>
                            <td>Interest rate applies after first year</td>
                            <td>8%</td>
                        </tr>

                    </tbody>

                </Table>
            </div>
            <Button onClick={handleClick} className='btn-success'>I agree to terms and condtion and accept the offer</Button>


        </div>
    )
}

export default FirstYearFree