import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footersmall from '../Footersmall';
import NavbarDash from '../Navbars/NavbarDash';

const Payments = () => {

    const [cardnumber, setCardNumber] = useState();
    const [cardexpiry, setCardExpiry] = useState();
    const [cardcvc, setCardCvc] = useState();
    const [cardholdername, setCardHoldername] = useState();
    const [amount, setAmount] = useState();

    const navigate = useNavigate();
 

    var rxcard = /^[0-9]{16}$/
        var rxexpiry = /^[0-9/]{5}$/
        var rxcvc = /^[0-9/]{3}$/
        var rxname = /^[^0-9@%$^&*()-\s][a-zA-Z\s]+$/
        var rxpin = /^[0-9/]{4}$/

    const submitdetails = () => {
      
        // if (!rxcard.test(cardnumber)) {
        //     alert("Please enter 16 Digit debit card")
        // }
        // else if (!rxexpiry.test(cardexpiry)) {
        //     alert("Please enter card expiry in dd/yy format")
        // }
        // else if (!rxcvc.test(cardcvc)) {
        //     alert("Card CVC must be 3 digits")
        // }
        // else if (!rxname.test(cardholdername)) {
        //     alert("Name should not contain special character")
        
        // else if (!rxpin.test(pin)) {
        //     alert("PIN must be 4 digits")
       
        // localStorage.setItem("abc", JSON.stringify(accountsummary))
        // alert("Payment received")
        navigate('/dashboard')
        }

        const userdetails = JSON.parse(localStorage.getItem('user'));


  return (
    <div className='padding'>

        <NavbarDash/>

    <div className='row my-5 p-5'>
        <div className='container d-flex justify-content-center'>
            <div className='col-md-6 col-sm-8'>
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6">
                                <span>EMI PAYMENT</span><br/>
                                <span>Enter Debit or Credit Card details</span>
                            </div>
                            <div className='col-md-6 text-right mt-1px'>
                                <img src="https://img.icons8.com/color/36/000000/visa.png" />
                                <img src="https://img.icons8.com/color/36/000000/mastercard.png" />
                                <img src="https://img.icons8.com/color/36/000000/amex.png" />
                            </div>
                        </div>
                    </div>
                    <div className='card-body height: 350px'>
                        <div className="form-group">
                            <label for="cc-number" className="control-label">CARD NUMBER</label>
                            <input id="cc-number" type="tel" className="input-lg form-control cc-number" autocomplete="cc-number" placeholder="4234 6456 9874 6541" disabled />
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="cc-exp" className="control-label">CARD EXPIRY</label>
                                    <input id="cc-exp" type="tel" className="input-lg form-control cc-exp" autocomplete="cc-exp" placeholder="10 / 2023" disabled />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="cc-cvc" className="control-label">CARD CVV</label>
                                    <input id="cc-cvc" type="tel" className="input-lg form-control cc-cvc" autocomplete="off" placeholder="&bull;&bull;&bull;" disabled />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="numeric" className="control-label">CARD HOLDER NAME</label>
                            <input type="text" className="input-lg form-control"  placeholder={userdetails.name} disabled/>
                        </div>
                        <div className="form-group">
                            <label for="numeric" className="control-label">Enter Amount</label>
                            <input type="text" className="input-lg form-control" placeholder='15500' disabled/>
                        </div>
                        <div className="form-group">
                            <input value="MAKE PAYMENT" onClick={submitdetails} type="button" className="btn btn-primary btn-lg mt-3 form-control" style={{ fontsize: 2 }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footersmall/>
</div>
  )
}

export default Payments