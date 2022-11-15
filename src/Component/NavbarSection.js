// import { EuroSymbol } from '@mui/icons-material';
// import { Avatar, Typography } from '@mui/material';
import { NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

// import { useSelector } from 'react-redux';
// import { Link,  useNavigate } from 'react-router-dom';

function NavbarSection() {

// const couser = useSelector(state=> state.user.value)
 const styledlinked={color:"white", "textDecoration":"none"};
 const styledbutton = { backgroundColor: "skyblue" }
const styledNav={backgroundColor: "#401664"}
const styledLogo= {
  height:40
}
//  const navigate = useNavigate();
//   const deletetoken = () => {
//     localStorage.removeItem("token");
//     navigate("/")}

//  const reload=()=>{
//   window.location.reload();
  
//   }
 

  return (
    // <Navbar bg="secondary" variant='dark' expand="lg" >
      // <Navbar fixed="top" style={styledNav} variant='dark' expand="lg" >
        <Navbar style={styledNav} variant='dark' expand="lg" >
      <Container fluid>
     
        <img style={styledLogo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfv4bu-TEUp4k4el9jvzj9oA_kbG_qaed3Y9M15C0mFAPsJh46XvoqI1mViznL5lYvQ8&usqp=CAU'/>
        <Navbar.Brand href="/">NatWest</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto"
            style={{ maxHeight: '120px' }}
            navbarScroll
          >
            <Nav.Link href="/">About car loans</Nav.Link>
            <Nav.Link href="#borrowingterms" >Borrowing terms</Nav.Link>
            <Nav.Link href="#calculator">Car loan calculator</Nav.Link>
            <Nav.Link href="faq">FAQs</Nav.Link>
          
          </Nav>
          
        </Navbar.Collapse>
        <Link style={styledlinked}to='/signin'>Log in</Link>
      </Container>
      
    </Navbar>
  );
}

export default NavbarSection;