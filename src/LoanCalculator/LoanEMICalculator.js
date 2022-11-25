import { Slider, Typography } from '@mui/material'
// import {withStyles} from '@mui/styles'
import React, { useState } from 'react'
// import { Pie } from 'react-chartjs-2'
import TableDetails from './TableDetails'
import SliderMarks from './SliderMarks'
import { Chart, ArcElement } from 'chart.js'
import { Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
Chart.register(ArcElement);



// const PrettoSlider =withStyles({
// root:{color: 'MediumViolatRed', height:10},
// thumb:{height:25, width:25, backgroundColor:'white', border:'3px solid black', marginTop:-9, marginLeft:-9},
// track:{height:10, borderRadius:4},
// rail:{height:10, borderRadius:4},
// })(Slider);

const PrettoSlider = {
    color: "#401664",
    height: 5


}

const styledCont = {
    // backgroundColor: "#FEDFE2",
    // backgroundColor:"grey",
    padding: 25,
    borderRadius: '.5rem',
     color:"#401664",
    textAlign:'left'

}


const LoanEMICalculator = () => {

   

    const [pAmount, setpAmount] = useState(500000);
    const [interest, setInterest] = useState(7);
    const [duration, setDuration] = useState(24);
    const maxValue = 5000000;
    const intMax = 20;
    const maxDuration = 240;

    const intr = interest / 1200;
    const emi = duration ? Math.round(pAmount * intr / (1 - (Math.pow(1 / (1 + intr), duration)))) : 0;
    const totalAmt = duration * emi;
    var TotalAmountOfCredit = Math.round((emi / intr) * (1 - Math.pow((1 + intr), (-duration))));
    const TotalAmountOfInterest = Math.round(totalAmt - TotalAmountOfCredit);


    return (
        <div >
              <Card >
                <Card.Header style={{backgroundColor:'#410C41', color: 'white'}} as='h4'>Loan Calculator</Card.Header>
                
         
            {/* <Card style={styledCont}> */}
          

            <div className='d-md-flex p-3'style={styledCont}>
                <div className='col-md-6 p-3'>
                <p>Use our loan calculator to estimate how much you could borrow, your interest rates and monthly payments, with no impact on your credit score. 
                </p>
                    <div>
                        <Typography gutterBottom>Loan Amount</Typography>
                        <Slider style={PrettoSlider} marks={SliderMarks.marksAmt} value={pAmount} onChange={(event, vAmt) => { setpAmount(vAmt) }} defaultValue={pAmount} max={maxValue} />
                    </div>

                    <div>
                        <Typography gutterBottom>Interest Rate</Typography>
                        <Slider style={PrettoSlider} marks={SliderMarks.marksInt} value={interest} onChange={(event, vInt) => { setInterest(vInt) }} defaultValue={interest} max={intMax} />
                    </div>

                    <div>
                        <Typography gutterBottom>Tenure</Typography>
                        <Slider style={PrettoSlider} marks={SliderMarks.marksTenure} value={duration} onChange={(event, vDur) => { setDuration(vDur) }} defaultValue={duration} max={maxDuration} />
                    </div>
                </div>
            

                <div className='col-md-6 m-2 p-5'>
                    <div>
                
                            <th>
                                <TableDetails pAmount={pAmount} totalAmt={totalAmt} interest={interest} duration={duration} emi={emi} TotalAmountOfInterest={TotalAmountOfInterest} />
                            </th>            
                </div>
            </div>
        </div>
        {/* </Card> */}
        </Card>
    </div>
    )
}

export default LoanEMICalculator