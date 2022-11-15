import './App.css';
import SignIn from './Component/SignIn';
import Register from './Component/Register';
import NavbarSection from './Component/NavbarSection';
import Footer from './Component/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Dashboard from './Component/Dashboard';
import PrivateRoutes from './Component/PrivateRoutes';
import InterestFreeLoan from './AcceptanceRejectionTemplates/InterestFreeLoan';
import FirstYearFree from './AcceptanceRejectionTemplates/FirstYearFree';
import WithInterest from './AcceptanceRejectionTemplates/WithInterest';
import RejectionTemplate from './AcceptanceRejectionTemplates/RejectionTemplate';
import ApplicationForm from './Component/ApplicationForm';
import LoanEMICalculator from './LoanCalculator/LoanEMICalculator';
import FAQs from './Component/FAQs';
import Profile from './Component/Profile';


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

  <Route element={<PrivateRoutes />}>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/interestFreeLoan' element={<InterestFreeLoan/>}/>
  <Route path='/firstYearFree' element={<FirstYearFree/>}/>
  <Route path='/withInterest' element={<WithInterest/>}/>
  <Route path='/rejectionTemplate' element={<RejectionTemplate/>}/>
  <Route path='/applicationForm' element={<ApplicationForm/>}/>
  <Route path='/profile' element={<Profile/>}/>
 

  </Route>

</Routes>

    </div>
  );
}

export default App;
