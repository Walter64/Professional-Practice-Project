import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from'react-bootstrap';

function App() {
  return (
    <div className="App">
    <header>
      Hello
    </header>
    <h1>Help!!!!!!!</h1>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
     <Navbar.Brand href="/">World Beers</Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="mr-auto">
         <Nav.Link href="/lookUpHolidayExperience">Link 1</Nav.Link>
         <Nav.Link href="/addYourOwnExperience">Link 2</Nav.Link>
         <Nav.Link href="/contactUs">Link 3</Nav.Link>
       </Nav>
   
     </Navbar.Collapse>
   </Navbar>
   </div>
  );
}

export default App;
