import { PersonVcard } from "react-bootstrap-icons"
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Resume from "./Resume";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

const ResumeLink=()=>{
    const [show, setShow] = useState(false);

    return(
        <div className="social_media_icon" >
            
            <Modal show={show} size="lg" onHide={() => setShow(false)}>
                <Modal.Header closeButton />
                <Resume />
            </Modal>

            <OverlayTrigger placement="bottom"
                overlay={<Tooltip>Resume</Tooltip>}>
                <PersonVcard size={30} onClick={()=>setShow(true)} />
            </OverlayTrigger>
            
        </div>
    )
}
export default ResumeLink