import "./skill.css"
import {Row} from "react-bootstrap";

import Backend from "./Backend";
import Frontend from "./Frontend";
import Design from "./Design";

const Skill = () =>{
    return (
        <div id="skill">
            <div className="skill_wrapper">
                <h1><strong>Tech Stack</strong></h1>
                <Row className='mt-4'>
                    <Backend />
                    <Frontend />
                    <Design />
                </Row>
            </div>
        </div>

    )
}
export default Skill