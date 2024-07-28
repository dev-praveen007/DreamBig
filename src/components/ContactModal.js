import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import emailjs from "@emailjs/browser";
import InputGroup from "react-bootstrap/InputGroup";
import { Col, Row } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";

function ContatusModal(props) {
  const { show, handleShow, handleClose } = props;

  const [formData, setFormData] = useState({});

  const onMessageSend = async (e) => {
    // e.preventdefault()
    try {
      const getData = await emailjs.send(
        "service_8vwe3aw",
        "template_bklv5j3",
        {
          to_name: "Deva",
          from_name: "Dream big studios",
          message: JSON.stringify(formData, null, 2),
          reply_to: "dream",
        },
        { publicKey: "eaBSTlTxZU5tbgCLP" }
      );
      console.log("getData", getData, getData?.status);
      setFormData({});
      handleClose();
    } catch (e) {
      console.log("errorn on ", e);
      return;
    }
  };

  return (
    <>
      <Modal className="contact-modal" show={show} onHide={handleClose}>
        <button
          className="modal-close-icon rounded-2"
          onClick={() => {
            setFormData({});
            handleClose();
          }}
        >
          <i className="bi bi-x-circle-fill "></i>
        </button>
        <Modal.Body className="modal-body-bg">
          <div className="bg-img"></div>
          <div className="modal-con">
            <div className="d-flex align-items-center justify-content-center">
              <div className="modal-exclusive">
                Exclusive offer
                {/* <p className="h2 d-flex align-items-center justify-content-center">
              Contact us
            </p> */}
              </div>
            </div>
            <div className="create-love">
              <p className="modal-Heading h4 mb-0">Create Your Big Day </p>
              <p className="modal-Heading text-center h4">With Us</p>
            </div>
            <div>
              <p className="text-center">
                Don't miss out! Choose our Standard Package Today and enjoy a
                FREE Prewedding photoshoot.
              </p>
            </div>

            <div className="w-100 mt-4">
              <Row>
                <Col md={6}>
                  {/* <input
                    type="text"
                    className="cus-model-input"
                    placeholder="Your Name"
                    onChange={(e) =>
                      setFormData({ ...formData, Name: e.target.value })
                    }
                  /> */}
                  <div className="wrap-input-1">
                    <input
                     className="input" 
                     type="text"
                     placeholder="Name"  
                     onChange={(e) =>
                      setFormData({ ...formData, Name: e.target.value })
                     } 
                    />
                    <span className="focus-border"></span>
                  </div>
                </Col>

                <Col md={6}>
                  {/* <input
                    type="text"
                    className="cus-model-input"
                    placeholder="Your emil"
                    onChange={(e) =>
                      setFormData({ ...formData, Email: e.target.value })
                    }
                  /> */}
                  <div className="wrap-input-1">
                    <input
                     className="input" 
                     type="text"
                     placeholder="Your emil"  
                     onChange={(e) =>
                      setFormData({ ...formData, "Eail": e.target.value })
                     } 
                    />
                    <span className="focus-border"></span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  {/* <input
                    type="number"
                    className="cus-model-input"
                    placeholder="Phone"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        "Mobile number": e.target.value,
                      })
                    }
                  /> */}
                  <div className="wrap-input-1">
                    <input
                     className="input" 
                     type="text"
                     placeholder="Phone" 
                     onChange={(e) =>
                      setFormData({ ...formData, "Mobile number": e.target.value })
                     } 
                    />
                    <span className="focus-border"></span>
                  </div>
                </Col>

                <Col md={6}>
                  {/* <input
                    type="text"
                    className="cus-model-input"
                    placeholder="Type of shoot"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        "Type of shoot": e.target.value,
                      })
                    }
                  /> */}
                  <div className="wrap-input-1">
                    <input
                     className="input" 
                     type="text"
                     placeholder="Type of shoot"  
                     onChange={(e) =>
                      setFormData({ ...formData, "Type of shoot": e.target.value })
                     } 
                    />
                    <span className="focus-border"></span>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <textarea
                    placeholder="Type your message here"
                    type="text"
                    className="cus-model-input"
                    onChange={(e) =>
                      setFormData({ ...formData, Message: e.target.value })
                    }
                  />
                  {/* <div className="wrap-input-1">
                    <textarea
                     className="input" 
                     type="text"
                     placeholder="Type your message here" 
                     onChange={(e) =>
                      setFormData({ ...formData, Message: e.target.value })
                     } 
                    />
                    <span className="focus-border"></span>
                  </div> */}
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <input
                    // placeholder="Type your message here"
                    type="date"
                    className="cus-model-input"
                    onChange={(e) =>
                      setFormData({ ...formData, Date: e.target.value })
                    }
                  />
                </Col>
              </Row>
              <div className="d-flex alilgn-items-cener justify-content-center mt-3">
                <button
                  className="modal-submit-btn"
                  onClick={(e) => onMessageSend(e)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContatusModal;
