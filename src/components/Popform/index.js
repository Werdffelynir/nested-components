import React from 'react';
import './style.css';
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Form,
  Image,
} from 'react-bootstrap';
import documentIcon from './assets/document.png';


function Popform(props) {

  return (
      <Modal id="Popform" size="lg"
             {...props}
             aria-labelledby="contained-modal-title-vcenter"
             centered>
        <Modal.Header className="bg-primary text-light" closeButton >
          <Modal.Title>Nested Components - Modal</Modal.Title>
        </Modal.Header>

        <Modal.Body className="mp-10">
          <Form>
            <Form.Group>
              <Form.Label htmlFor="name">Name *</Form.Label>
              <Form.Control placeholder="Username"/>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email <span className="lite font-weight-normal">(Lorem ipsum dolor sit amet, consectetur adipisicing elit.)</span></Form.Label>

              <Row className="align-items-center ">
                <Col xs={1} >
                  <Form.Control type="radio" checked={true} onChange={()=>{}} style={{width:'18px'}}/>
                </Col>
                <Col>
                  <Form.Control type="email" placeholder="Enter a valid email"/>
                </Col>
                <Col xs={1} >
                  <Image src={documentIcon} width={24} />
                </Col>
              </Row>

              <a href="#">Add email</a>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="phone">Phone</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone"/>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="location">Location</Form.Label>
              <Form.Control as="select" options={{a:'a'}} placeholder="Enter your location">
                <Form.Control as="option" name="city">City City</Form.Control>
                <Form.Control as="option" name="city">Town Town</Form.Control>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="highlight">Highlight</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Enter highlights/summary for the candidate"/>
            </Form.Group>

            <Row className="align-items-center text-right mt-2">
              <Col xs={1} className="mt-2">
                <Image src={documentIcon} width={24} />
              </Col>
              <Col>
                <Row className="file-row align-items-center text-left mt-2">
                  <Col xs={3}>
                    <Form.Control as="button" className="btn-primary" type="file">Upload resume</Form.Control>
                  </Col>
                  <Col>
                    <div className="file-name">No file selected</div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="align-items-center text-right mt-2">
              <Col xs={1}>
                <Image src={documentIcon} width={24} />
              </Col>
              <Col>
                <Form.Control placeholder="LinkedIn"/>
              </Col>
            </Row>
            <Row className="align-items-center text-right mt-2">
              <Col xs={1}>
                <Image src={documentIcon} width={24} />
              </Col>
              <Col>
                <Form.Control placeholder="Facebook"/>
              </Col>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Container>
          <Row>
            <Col className="text-left">
              <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Col>
            <Col className="text-right">
              <Button variant="primary" onClick={props.onHide}>Update</Button>
            </Col>
          </Row>
          </Container>
        </Modal.Footer>
      </Modal>
  );
}

export default Popform;
