// import { Table, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const TableDetails = (props) => {
    // const styledbutton = { backgroundColor: "#009688" };
    const styledbutton = { backgroundColor: "#401664", border:'none' };
    const styledlinked = { color: "white", "textDecoration": "none", marginLeft: 'auto' }
    const styledTable = {

        // backgroundColor:'#009688'
        backgroundColor:'#f78e99',
        color:'white'

    }

    return (
        <div>
            <h4><i>For illustration purpose only</i></h4>
            <Table striped bordered hover  style={styledTable}>

                <thead>
                    <tr>
                        <th>Loan Amount</th>
                        <td>£{props.pAmount}</td>
                    </tr>

                    <tr>
                        <td>Interest Rate %</td>
                        <td>{props.interest}</td>
                    </tr>

                    <tr>
                        <td>Tenure (Months)</td>
                        <td>{props.duration} </td>
                    </tr>

                    <tr>
                        <td>EMI (Monthly)</td>
                        <td>£{props.emi} </td>
                    </tr>

                    <tr>
                        <td>Total Interest</td>
                        <td>£{props.TotalAmountOfInterest}</td>
                    </tr>

                    <tr>
                        <td>Total Payment</td>
                        <td>£{props.totalAmt ? props.totalAmt : 0}</td>
                    </tr>


                </thead>
            </Table>

            <Button size='lg' style={styledbutton} ><Link style={styledlinked} to='/signup'>Start your Application</Link></Button>
        </div>
    )
}

export default TableDetails