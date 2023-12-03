import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function MainForm() {

  const Submit = (e) => {
    const formEle = document.querySelector("form")
    e.preventDefault()
    console.log('Submitted!')
    const formData = new FormData(formEle)
    fetch("https://script.google.com/macros/s/AKfycbwIcs6THkUPqWSGSF_3Qr1fgwNAoFHeWzEchAI2TT3igjrawZB8otq9fu9eTjncwdjxAw/exec", {
      method: "POST",
      body: formData
    }).then((res) => res.json()).then((data) => {
      console.log(data)
    }).catch((error) => console.log(error))
  }

  return (
    <>
    <Card>
      <Card.Body>
      <Form className='form' onSubmit={(e) => Submit(e)}>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>First name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="First name"
          name="FirstName"
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Last name"
          name="LastName"
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          name="Email"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Card.Body>

    </Card>
      
    </>

  );
}

export default MainForm;
