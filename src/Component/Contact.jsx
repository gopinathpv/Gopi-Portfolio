import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

const Contact = () => {
  const [email, setEmail] = useState({
    name: "",
    subject: "",
    content: "",
  });

  const handleEvent = (e) => {
    setEmail((email) => ({
      ...email,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = () => {
    console.log(email);
  };

  return (
    <div style={{ padding: "3%" }}>
      <Card style={{ background: "#121426", padding: "2%" }}>
        <Card.Body>
          <FloatingLabel controlId="floatingTextarea" className="mb-3">
            <Form.Control
              as="input"
              name="name"
              value={email.name}
              placeholder="Name or Email"
              onChange={(e) => handleEvent(e)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea" className="mb-3">
            <Form.Control
              as="input"
              placeholder="Subject"
              name="subject"
              value={email.subject}
              onChange={(e) => handleEvent(e)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2">
            <Form.Control
              as="textarea"
              name="content"
              value={email.content}
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              onChange={(e) => handleEvent(e)}
            />
          </FloatingLabel>
        </Card.Body>
        <Card.Footer style={{ alignSelf: "center" }}>
          <Button variant="primary" onClick={sendEmail}>
            Send
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Contact;
