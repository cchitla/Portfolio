import React from 'react'
import './Contact.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContactForm from '../../components/ContactForm/ContactForm'

function Contact() {
  return (
    <>
      <Row className="my-5 mx-4 text-center">
        <Col className="m-auto">
          <a className="mr-3 page-links" target="_blank" rel="noopener noreferrer"
            href="https://github.com/cchitla/">Github</a>

          <a className="ml-3 page-links" target="_blank" rel="noopener noreferrer"
            href="https://www.linkedin.com/in/christopher-chitla/">LinkedIn</a>
        </Col>
      </Row>

      <Row>
        <Col className="text-center m-auto" lg={8}>
          <ContactForm />
        </Col>
      </Row>
    </>
  );
};

export default Contact;
