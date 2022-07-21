import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Buy from './components/Buy'


class Header extends React.Component{
  render(){
    return(
  
    <div>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src={process.env.PUBLIC_URL + "logo/logo2.png"}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Real-Estate</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Buy" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Homes for sale</NavDropdown.Item>
                <NavDropdown.Item href="#">Offices for sell</NavDropdown.Item>
                <NavDropdown.Item href="#">Appartments for sell</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Recently Sold </NavDropdown.Item>
                {/*<Nav>NavDropdown.Item href="#">Separated link</NavDropdown.Item>*/}
              </NavDropdown>
              <NavDropdown title="Rent" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Homes for Rent</NavDropdown.Item>
                <NavDropdown.Item href="#">Offices for Rent</NavDropdown.Item>
                <NavDropdown.Item href="#">Appartments for Rent</NavDropdown.Item>
                <NavDropdown.Divider />
                {/*<NavDropdown.Item href="#">Separated link</NavDropdown.Item>*/}
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link eventKey={2} href="/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <BrowserRouter>
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/Buy' component={Buy} />
        </Switch>
      </BrowserRouter>

    </div>
  )
}
}

export default Header

