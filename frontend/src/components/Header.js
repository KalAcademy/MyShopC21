import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () =>{
    dispatch(logout())
  }
  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MyShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
              <Nav.Link href="/cart"><i className='fas fa-cart-plus'></i>Cart</Nav.Link>
              {userInfo? (
                 <NavDropdown title={userInfo.name} id="username">
                  <NavDropdown.Item as={Link} to="/profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ): (<Nav.Link as={Link} to="/login">
                  <i className="fas fa-user"></i> Sign In
                </Nav.Link>)}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header