import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import light from './Image/light.png'


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  sticky="top">
      <Container>
          <Navbar.Brand href="#home" style={{marginRight:'200px',color:'blue'}} >
            <img alt="" src={light} width="30" height="30" className="d-inline-block align-top"
            />{' '}
            <snap >SHASHWAT</snap>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{marginRight:'25px',color:'black'}}>Product</Nav.Link>
            <NavDropdown style={{marginRight:'25px', color:'black'}} title="Solutions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" style={{marginRight:'25px',color:'black'}}>Enterprise</Nav.Link>
            <Nav.Link href="#link" style={{marginRight:'25px',color:'black'}}>Pricing</Nav.Link>
            <NavDropdown style={{marginRight:'200px', color:'black'}} title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" style={{marginRight:'10px',color:'blue'}}>Log in</Nav.Link>
            <Button variant="primary">get started</Button>{' '}              
            
            
          </Nav>
        </Navbar.Collapse>
      </Container >
    </Navbar>
  );
}

export default BasicExample;