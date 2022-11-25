import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';


function NavbarSection() {

  const styledlinked = { color: "white", "textDecoration": "none" };
  const styledNav = { backgroundColor: "#401664" }
  const styledLogo = {height: 40}


  return (

    <Navbar style={styledNav} variant='dark' expand="lg" >
      <Container fluid>
        <Navbar.Brand href="/"> <img style={styledLogo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfv4bu-TEUp4k4el9jvzj9oA_kbG_qaed3Y9M15C0mFAPsJh46XvoqI1mViznL5lYvQ8&usqp=CAU' />
          AKY Insta-Loan</Navbar.Brand>
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

        <Link style={styledlinked} to='/signin'>Sign in <LoginIcon style={{ marginLeft: 'auto', color: 'white' }} /></Link>
      </Container>

    </Navbar>
  );
}

export default NavbarSection;