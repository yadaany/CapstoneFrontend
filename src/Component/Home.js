import React from 'react'
import { Button, Card, Carousel, Container, Form, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import NavbarSection from './NavbarSection'
import First from '../Images/First.png'
import Second from '../Images/Second.png'
import Third from '../Images/Third.png'
import LoanEMICalculator from '../LoanCalculator/LoanEMICalculator'
import cone from '../Images/cone.png'
import csec from '../Images/csec.png'
import cthird from '../Images/cthird.png'
import carloansec from '../Images/carloansec.png'

const Home = () => {

  const styledbutton = { backgroundColor: "#401664", border: 'none' };
  const styledlinked = { color: "white", "textDecoration": "none", marginLeft: 'auto' };
  return (
    <div>
      
    <div className='mb-2'>
      <NavbarSection />
  </div>

      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block"
              src={First}
              alt="First slide"
              width='100%'
            />

          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block"
              src={Second}
              alt="Second slide"
              width='100%'
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={Third}
              alt="Third slide"
              width='100%'
            />

      
          </Carousel.Item>
        </Carousel>
        {/* </Container> */}

        {/* <div  className="d-flex align-item-center mt-5">
                <div className="container-fluid nav_bg">
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h1>
                                    Need Car loan
                                    </h1>
                                    <Card className='my-3'>
                                      <Card.Body>
                                      <Card.Text>
                                    Even if some of your plans have been pushed back, there is still time to make your goals happen.
                                     Other loan amounts available at alternative rates. Our rates depend on your circumstances and loan amount and may differ from the Representative APR. To apply, you must be 18+ and a UK resident with a NatWest current account (held for 3+ months).
                                    </Card.Text>
                                 </Card.Body>
                                  </Card>
                                </div>
                                <div className='col-lg-7 order-1 order-lg-2 header-img'>
                                    <img src={First} className="img-fluid" alt="round img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        <Container  >


          <Card className='m-2' >
            <Card.Body>
              <h2>Get Instant Car Loan at Zero or Lowest Interest Rates</h2>
              <p>
                Owning and driving a vehicle is a dream to many. With high rates of transportation, buying a vehicle appears a much lucrative option in the long run. But at times when the cost of living is exorbitantly high, managing the amount for buying an automobile can be an excruciating ordeal. At times like these auto loans can be a rosy choice. We at Fibe provide the best auto loan with lowest rates of interest. With our online auto loans, get an amount upto ₹ 5,00,000 credited to your account. Using our instant loan app in India, avail best online auto loans quickly.
              </p>
              <Button size="lg" style={styledbutton} type="submit">
                <Link style={styledlinked} className='btn-get-started' to='/signup'>Start your Application</Link>
              </Button>
            </Card.Body>
          </Card>

        </Container >
    


          <Container className='d-md-flex justify-content-center p-1'>
            <Card className='m-1' >
              <Card.Img variant="top" src={cthird} />
              <Card.Body>
                <Button style={styledbutton} >Check eligibility</Button>
              </Card.Body>
            </Card>

            <Card className='m-1'>
              <Card.Img variant="top" src={csec} />
              <Card.Body>
                <Button style={styledbutton} ><a href='#calculator' style={styledlinked}>Loan Calculator</a></Button>
                {/* <Button variant="primary">Check eligibility</Button> */}
              </Card.Body>
            </Card>

            <Card className='m-1' >
              <Card.Img variant="top" src={cone} />
              <Card.Body>
                <Button style={styledbutton}><Link style={styledlinked} to='signin'>Check your Loan Status</Link></Button>
              </Card.Body>
            </Card>
          </Container>
      
        <Container className="mt-2 p-2 rounded">
          <Card> 
          <Card.Body>
            <h2>What credit score is needed for 0% on a car?</h2>
            <p>
              Zero percent financing deals are generally reserved for borrowers with excellent credit — typically classified as a credit score of 800 and above. You'll want to review your credit reports on your own before you start shopping for auto financing.
              </p>
            <ul>
              <li>Excellent(750+)</li>
              <li>Good(700-749)</li>
              <li>Fair(640-699)</li>
              <li>Needs Work(less than 640)</li>
            </ul>

            <Button size="lg" style={styledbutton} type="submit">
              <Link style={styledlinked} className='btn-get-started' to='/signup'>Check Your Eligibility Now</Link>
            </Button>
            </Card.Body>
            </Card> 
        </Container >

        <Container className="d-flex mt-2 p-2 rounded">
          <Card>
            <Card.Body>
              <h2>Taking out a NatWest car loan</h2>
              <ul>
                <li>If you're thinking about a new car, a loan could help you spread the cost of your purchase.</li>
                <li>We'll take your circumstances and loan amount in to account to offer a personalised car loan rate.</li>
                <li>It's easy to apply online. You can get a quote at the start of your application and then decide if you want to take out a loan or not.</li>
                <li>You could get your loan funds on the same day if you apply online. Sometimes we need to contact you for more information, so it can take a little longer.</li>
              </ul>
              <Button size="lg" style={styledbutton} type="submit">
                <Link style={styledlinked} className='btn-get-started' to='/signup'>Start your Application</Link>
              </Button>
              
            </Card.Body>
          </Card>

          <Card className='m-1' >
              <Card.Img variant="top" src={carloansec} />
              {/* <Card.Body>
                <Button style={styledbutton}  >Check eligibility</Button>
              </Card.Body> */}
            </Card>
        </Container >

      
        <Container className="mt-2 p-2 rounded" id="borrowingterms">
          <h2>Borrowing terms for a car loan</h2>
          <p>This is the length of time over which your car loan agreement is in place. Our minimum and maximum terms for certain loan amounts are shown below.</p>
          <Table>
            <thead>
              <tr>
                <th>Loan amount</th>
                <th>Repay over</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>2 lakh - 20 lakh</td>
                <td>1 to 5 years</td>
              </tr>

              <tr>
                <td>20 lakh - 50 lakh</td>
                <td>1 to 7 years</td>
              </tr>

            </tbody>

          </Table>

        </Container >
        <div id="calculator">
          <LoanEMICalculator />
        </div>

      </Container>
      <Footer />
    </div>
  )
}

export default Home