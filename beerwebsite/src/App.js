import logo from './logo.svg';
import gardenGlobe from './gardenGlobe.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { partyPack } from './components/partyPack';
import { mainPage } from './components/mainPage';
import { worldBeers } from './components/worldBeers';
import { bestSellers } from './components/bestSellers';
import { nonAlcoholic } from './components/nonAlcoholic';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div id="container">

            <div class="flexcontainer">
              <div id="c1">
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>

              <div id="c2">
                <img alt="Garden Globe" src={gardenGlobe} height={100} width={100} />
              </div>

              <div id="c3">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
                <p id="signin">Sign In</p>
              </div>

              <div id="c4">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <p>€0.00</p>
              </div>
            </div>

          </div>
        </header>

        <div id="nav">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">World Beer Garden</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/partyPack">Party Pack</Nav.Link>
                <Nav.Link href="/worldBeers">World Beers</Nav.Link>
                <Nav.Link href="/bestSellers">Best Sellers</Nav.Link>
                <Nav.Link href="/nonAlcoholic">Non-Alcoholic</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path='/' component={mainPage} exact />
            <Route path='/partyPack' component={partyPack} />
            <Route path='/worldBeers' component={worldBeers} />
            <Route path='/bestSellers' component={bestSellers} />
            <Route path='/nonAlcoholic' component={nonAlcoholic} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
