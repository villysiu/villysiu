import "./contact.css"
import {Button, Form} from "react-bootstrap";

const ContactFrom = () =>{
    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    // }
    return (
        <div id="contact">
            <div className="contact_wrapper">
                <h1><strong>Contact me</strong></h1>

                <Form className="contact_form my-4" action="https://formsubmit.co/villysiu@gmail.com"
                      method="POST" >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" name="subject" placeholder="I want to hire you!" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={6} name="messsage"/>
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    )
}
export default ContactFrom