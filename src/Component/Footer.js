import React from 'react'

const Footer = () => {
  return (

    <footer style={{backgroundColor:'#401664', color:'white'}} className="p-3">
    <div className="row">
      <div className="col-4">
        <h6>Products</h6>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Loan accounts</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Savings</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Investments</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Credit cards</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Overdraft</a></li>
        </ul>
      </div>

      <div className="col-4">
        <h6>Life Moments</h6>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Managin your money</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Travel Guide</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Financial abuse</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">First time buyer guide</a></li>
        </ul>
      </div>

      <div className="col-4">
        <h6>Help and Support</h6>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Support</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Security</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Service Status</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Climate Change Hub</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Learning with AKY</a></li>
        </ul>
      </div>

      {/* <div className="col-4 offset-1">
        <form>
          <h6>Subscribe to our newsletter</h6>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div> */}
    </div>

    <div className="d-flex justify-content-between py-4 my-1 border-top">
      <p>Copyright © AKY Westminster plc 2022. Registered office: 250 Bishopsgate, EC2M 4AA.</p>
      <ul className="list-unstyled d-flex">
        <p>Connect with us</p>
        <li className="ms-3"><a href="https://twitter.com/NatWestGroup?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><svg style={{backgroundColor:'white'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z"/></svg></a></li>
        <li className="ms-3"><a href="https://www.facebook.com/NatWest/"><svg style={{backgroundColor:'white'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg></a></li>
        <li className="ms-3"><a href="https://in.linkedin.com/company/natwest-group?original_referer=https%3A%2F%2Fwww.google.com%2F"><svg style={{backgroundColor:'white'}}  xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg></a></li>
      </ul>
    </div>
  </footer>


  )
}

export default Footer