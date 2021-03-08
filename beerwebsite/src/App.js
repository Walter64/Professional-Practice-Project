import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from'react-bootstrap';

function App() {
  return (
    <div className="App">
    <header>
    <div className="LogIn">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg>
<br></br>
<p>Log In</p>
</div>
    </header>
    <br></br>
    <br></br>
    <br></br>
    <div className="Nav">
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
   </div>
  );
}

export default App;
