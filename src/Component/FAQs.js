import React from 'react'
import { Card, Container } from 'react-bootstrap'
import NavbarSection from './NavbarSection'
import faqqq from '../Images/faqqq.png'


const FAQs = () => {

  const stylelist = { color: '#009688' };
  const heading = { backgroundColor: '#009688' };

  return (
    <div>

   
        <NavbarSection />
     
<Container className='d-md-flex' >
      <div style={heading} className='container p-5 text-white'>
        <h1><i>Frequently asked questions ????</i></h1>
      </div>
      <div>
        <img src={faqqq}/>
      </div>
      </Container>

      <div className='container'>

        <h2 style={{color:'#401664'}}>What to know about Car loan application</h2>

        <ol >
          <li style={stylelist}>Who can apply for a NatWest car loan?</li>
          <p>To apply for a loan you need to be 18+ and Indian citizen.</p>
          <li style={stylelist}>When would I receive my money?</li>
          <p>You could get your loan funds on the same day if you apply online, are unconditionally accepted and sign your loan documents before 5.45pm Mon – Fri.
            Sometimes we need to contact you for more information, so it can take a little longer.</p>
          <li style={stylelist}>How much could I borrow?</li>
          <p>
            You can use our loan calculator to work out how much you want to borrow, over how long and your interest rate.</p>
          <li style={stylelist}>Is a loan the best option for me?</li>
          <p>If you’re not sure a loan is right for you, use our guide to compare your borrowing and understand whether a loan, credit card or overdraft would best suit you.</p>
          <li style={stylelist}>What is a soft search?</li>
          <p>To give you an idea of whether we're likely to accept your application for borrowing with NatWest, we can carry out what is known as a soft search. A soft search only takes a few moments to complete and although it is usually recorded on your credit file, it's not visible to other lenders - meaning it won't have any impact on your credit score.</p>
          <li style={stylelist}>Can I complete my loan application through app?</li>
          <p>We’ll give you your loan quote ,then we’ll ask you to submit your documents via personalised link </p>
          <li style={stylelist}>Will applying for loan impact my credit score?</li>
          <p>No, we’ll do a soft credit check and  will offer you an indicative loan quote via on the app itself as well on email. If you’re happy with your loan details you can then accept our offer and submit your loan document where we’ll complete a full credit check.</p>

        </ol>


      </div>


      <div className='container'>

<h2 style={{color:'#401664'}}>What happens once I've applied online?</h2>

<ol >
  <li style={stylelist}>If you finished and your application was accepted</li>
  <p>Congratulations. You'll receive written confirmation of your loan account details in the next few days. </p>

<p>Don't worry if you notice the loan account has been opened before you receive your loan funds, this is normal and you should expect to receive the funds shortly..</p>
 
  <li style={stylelist}>
If you finished, but we've asked you to provide more information</li>
  <p>
We've received your application. We'll be in touch within 5 working days, we just need to check your details and we will get back to you if we need more information. 
</p>
<p>You may receive an email or text message inviting you to provide documents information electronically via our emal link.</p>

  <li style={stylelist}>How do I check the status of my loan?</li>
  <p>
  You can check your loan status and other details after Successfull login on App.</p>

</ol>


</div>
      {/* Documents Required To Apply For Instant Loan:
      Below are the documents which you will need to apply for personal loan online.
      1. Identity proof: You will have to submit Aadhar card, Pan Card, Driving License or Passport as your ID proof.
      2. Address proof: You will need utility bills like electricity, water or phone bill or Passport as your address proof.
      3. Photo proof: A picture of yourself as a photographic proof.
      4. Salary slips: Your latest salary slips from your employer will be required.
      5. Bank statement: You will have to submit the salary credited bank statements.

      Input fields
      1. Type of employement -Salaried or Self employed
      2. Company Name
      2. Monthly Income
      3. Duration of loan


      Cars are no longer a luxury today; they have become a necessity. But if you are worried about your budget, simply apply for a car loan to make your dream of owning a car come true. Mahindra Finance makes car ownership a reality as you get financing up to the full cost of the vehicle.

      Thanks to a simple and quick loan application procedure from Mahindra Finance, you can have your car loan sanctioned in no time and can choose a convenient repayment schedule. This allows you to devote your time and attention to research car brands, models, and loan budget details.

      How to apply for a car loan
      Mahindra Finance has made its car loan application process easy so that potential car owners can have a hassle-free experience. The loan procedure is available both online and offline, and you can either visit the nearest branch or opt for our time-saving online loan process.

      It involves four easy steps:

      Step 1: Go to the website
      The first step is to start the application process by clicking the ‘Apply Now’ button on the website. You will be directed to a page where you will see different fields to be filled in. As you read further, you will get an idea of the information needed for filling out your car loan application. You can start applying once you are ready with the details.

      Step 2: Select your product
      The application form for a car loan requires you to select an appropriate product from the two given options: ‘Investment’ and ‘Loan’. Choose ‘Loan'.
      The next section will require you to ‘Select loan type’. It will show all the types of loans on offer that you can choose from.
      Depending on the type of purchase (used or new), choose either ‘car loans’ or ‘pre-owned car loans’.
      The final section in this step is entering your employment type and other personal details as applicable
      Once you have done all these, go back and cross-check the details and hit ‘submit’.
      Step 3: Get your loan approved
      Once you fill in the details and submit the form, you will get a call back from our executive. They will ask you to share the supporting documents for the details mentioned in the car loan application form. This includes KYC documents such as PAN card, Aadhaar card, any government-issued ID, salary slip, Form 16 for eligibility check, and proof of address. These documents are required for verification.

      Step 4: Get your loan sanctioned and disbursed
      The final step of the car loan application is approval and disbursement of your loan amount. After verification, your loan will be sanctioned immediately, and the amount will be credited if the documents are satisfactory. If not, you might be requested to submit additional documents.

      Now, wasn’t that easy and quick? So, stop dreaming about owning a new car and apply for a car loan with Mahindra Finance today!
 */}
 <footer style={{backgroundColor:'#401664', color:'white'}} className="d-flex flex-wrap justify-content-between align-items-center p-4 border-top">
    <div className="col-md-8 d-flex align-items-center">
     
      <p> © 2005-2022 National Westminster Bank plc</p>
      
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
    <li className="ms-3"><a href="#"><svg style={{backgroundColor:'white'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z"/></svg></a></li>
        <li className="ms-3"><a href="#"><svg style={{backgroundColor:'white'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg></a></li>
        <li className="ms-3"><a href="#"><svg style={{backgroundColor:'white'}}  xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg></a></li>
    </ul>
  </footer>

    </div>
  )
}

export default FAQs