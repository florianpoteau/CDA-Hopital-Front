import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiCirclePlus } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigationbar = () => {
    const styles = {
        navbar: {
            backgroundColor: "#9ADFDE",
        },
        form: {
            width: '50%'
        },
        container: {
            marginLeft: '2%'
        },
        inputGroup: {
            backgroundColor: '#FFFFFF'
        }
    };

    return (
        <>
            <Navbar style={styles.navbar}>
      <Container fluid>
    <Navbar.Brand href="/" className='ms-3 ms-md-5'><strong>Hopitaloflo</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
          </Nav>
          <Form className="d-flex" style={styles.form} >
          <div className="col-md-10">
        <FormGroup controlId="formValidationSuccess2">
            <InputGroup>
        <FormControl 
        type="search"
        placeholder="Rechercher patient"
        aria-label="Search"
        
        />
        <InputGroup.Text style={styles.inputGroup}>
            <CiSearch />
        </InputGroup.Text>
        </InputGroup> 
        </FormGroup>
            </div>
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
        </Nav>
            <Link to="/ajouterPatient">
                <CiCirclePlus style={{ color: 'black' }} size={50} />
            </Link>
      </Container>
    </Navbar>
        </>
    );
};

export default Navigationbar;