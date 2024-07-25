import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import emailjs from '@emailjs/browser';
function ContatusModal(props) {
    const {show, handleShow,handleClose} = props;

    const [formData,setFormData]=useState({
      name : "praveen",
      email : "prpakr@jajfd.com",
      messagee : "aohihawiohwfihiw"
    })

    const onMessageSend = async(e)=>{
      // e.preventdefault()
      try {
        const getData = await emailjs.send("service_8vwe3aw","template_bklv5j3",{
          to_name: "Deva",
          from_name: "Dream bid studios",
          message: JSON.stringify(formData,null,2),
          reply_to: "dream",
          },{publicKey:"eaBSTlTxZU5tbgCLP"});
          console.log("getData",getData);   
          debugger
      } catch (e) {
        debugger
        console.log("errorn on ",e);
        return
      }
     
    }


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

            <button onClick={(e)=>onMessageSend(e)}>
                Submit
              </button>
          {/* <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>You name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                autoFocus
                onChange={(e)=>setFormData({...formData,"Name":e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e)=>setFormData({...formData,"email":e.target.value})}
              
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="1234567899"
                onChange={(e)=>setFormData({...formData,"number":e.target.value})}
              
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              onChange={(e)=>setFormData({...formData,"message":e.target.value})}

            >
              <Form.Label>Type your message here</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
              <button onClick={(e)=>onMessageSend(e)}>
                Submit
              </button>
          </Form> */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContatusModal;