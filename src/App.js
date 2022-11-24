import './App.css';
import SignIn from './Component/SignIn';
import Register from './Component/Register';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';

import PrivateRoutes from './Component/PrivateRoutes';
import InterestFreeLoan from './AcceptanceRejectionTemplates/InterestFreeLoan';
import FirstYearFree from './AcceptanceRejectionTemplates/FirstYearFree';
import WithInterest from './AcceptanceRejectionTemplates/WithInterest';
import RejectionTemplate from './AcceptanceRejectionTemplates/RejectionTemplate';
import ApplicationForm from './Component/DashboardItems/ApplicationForm';
import LoanEMICalculator from './LoanCalculator/LoanEMICalculator';
import FAQs from './Component/FAQs';
import Profile from './Component/DashboardItems/Profile';
import Loans from './Component/DashboardItems/Loans';
import HIghInterestRate from './AcceptanceRejectionTemplates/HIghInterestRate';
import Dashboard from './Component/DashboardItems/Dashboard';
import Payments from './Component/DashboardItems/Payments';
import Offers from './Component/DashboardItems/Offers';
import { ContactUs } from './Component/DashboardItems/ContactUs';


function App() {
  return (
    <div className="App">
      
      {/* <NavbarSection/> */}
          {/* <SignIn/> */}
          {/* <Register/>
          <Footer/> */}
      
  <Routes>
  <Route path='/' element={<Home/>}/>     
  <Route path='/signin' element={<SignIn/>}/>
  <Route path='/signup' element={<Register/>}/>
  <Route path='/emiCalulator' element={<LoanEMICalculator/>}/>
  <Route path='/faq' element={<FAQs/>}/>
  <Route path='/contact' element={<ContactUs/>}/>

  <Route element={<PrivateRoutes />}>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/interestFreeLoan' element={<InterestFreeLoan/>}/>
  <Route path='/firstYearFree' element={<FirstYearFree/>}/>
  <Route path='/withInterest' element={<WithInterest/>}/>
  <Route path='/rejectionTemplate' element={<RejectionTemplate/>}/>
  <Route path='/applicationForm' element={<ApplicationForm/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/loans' element={<Loans/>}/>
  <Route path='/highinterest' element={<HIghInterestRate/>}/>
  <Route path='/paymentpage' element={<Payments/>}/>
  <Route path='/offers' element={<Offers/>}/>
  
 

  </Route>

</Routes>

    </div>
  );
}

export default App;
