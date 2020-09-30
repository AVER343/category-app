import {Nav, Navbar} from 'react-bootstrap';

import {Link} from 'react-router-dom'
import React from 'react';

const HeaderComponent =()=>{
    return(<Navbar bg="light" variant="dark">
    <Navbar.Brand href="#home"><Link to='/'> Navbar</Link></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to='/'> Home</Link></Nav.Link>
      <Nav.Link href="#home"><Link to='/add/category'>Add Category</Link></Nav.Link>
      <Nav.Link href="#home"><Link to='/add/form'> Add Form</Link></Nav.Link>
    </Nav>
    </Navbar>)
}
export default HeaderComponent