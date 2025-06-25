import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import {PersonVcard} from "react-bootstrap-icons";

const ResumeButton = () =>{
    const [show, setShow] = useState(false);
    const handleClick = () =>{
        setShow(true);
    }
    return(
        <>
            <Modal show={show} size="lg" onHide={() => setShow(false)}>
                <Modal.Header closeButton/>
                <Modal.Body style={{ height: "80vh" }}>
                <iframe
                    src="https://docs.google.com/document/d/1oSgW-s-d0VDQFRLcViGgi1_6VBraJQsbG_QQ0HzlcVg/preview"
                    width="100%"
                    height="100%"
                    style={{border: "none"}}
                    title="Google Doc Preview"
                />
                </Modal.Body>
            </Modal>

            <Button className="roundBtn" onClick={handleClick}><PersonVcard className="me-2 mb-1"/>Resume</Button>
        </>
    )
}
export default ResumeButton