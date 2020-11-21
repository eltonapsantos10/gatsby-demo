import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar, Nav, NavDropdown,Form,Button,FormControl} from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>

<Navbar bg="warning" expand="lg" fixed="top">
  <Navbar.Brand> <Link to="/"> <img src="https://img.icons8.com/fluent/96/000000/pets.png"/> </Link> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    
    <Link to="/page-2" className="nav-link" activeClassName="active">Veterinário</Link>
      <Link to="/page-3" className="nav-link" activeClassName="active">Adoções</Link>
      <Link to="/page-4" className="nav-link" activeClassName="active">Produtos</Link>
      <Link to="/page-5" className="nav-link" activeClassName="active">Redes Sociais</Link>
      <NavDropdown title="Diversos" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Roupas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Adesivos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Pulseiras</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Imprensa</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Digite aqui" className="mr-sm-2" />
      <Button variant="outline-warning">Pesquisar</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>


   
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
