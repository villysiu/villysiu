import "./aboutme.css"

import Social from "./Social";
import ResumeButton from "./ResumeButton";
import {Col, Row} from "react-bootstrap";
const AboutMe = () =>{
    return (
        <div id="aboutme">
            <Row className="aboutme_wrapper">
                <Col xs={12}  lg={3} className="aboutme_img">
                    <img id="profile" src="https://github.com/villysiu/villysiu/blob/main/src/data/images/villysiu.jpeg?raw=true" alt="Villy Siu" />
                </Col>
                <Col xs={12}  lg={9} className="aboutme_text">
                    <h1><strong>Hello, I am <span className="gradient-text">Villy Siu.</span></strong></h1>
                    <div>I am a Fullstack Engineer with a Bachelor's in Computer Science and a background in accounting and property management. I excel in agile methodologies, translating designs into scalable, readable code with object-oriented practices, and deploying applications efficiently.
                    </div>
                    <Social />
                    <div className="mt-5 text-center">
                        <ResumeButton />
                    </div>
                </Col>

            </Row>
        </div>
    )
}
export default AboutMe