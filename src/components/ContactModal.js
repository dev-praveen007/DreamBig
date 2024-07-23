import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ContatusModal(props) {
    const {show, handleShow,handleClose} = props;


  return (
    <>

      <Modal 
      show={show} 
      onHide={handleClose}

      >

        <Modal.Body>
            <div>
                <p className='h2 d-flex align-items-center justify-content-center' >Contact us</p>
            </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContatusModal;