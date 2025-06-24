import {Card, Col} from "react-bootstrap";
import {CodeSlash, Lightbulb} from "react-bootstrap-icons";

const Design = () =>{
    return (
        <Col xs={12} xl={4} >
            <Card >
                <Card.Body>
                    <Card.Title>
                        <Lightbulb className="me-2"/><h2 style={{ display: 'inline'}}>Design</h2>
                    </Card.Title>

                    <div className='card-text'>
                        <ul>
                            <li>Responsive UI
                                <ul>
                                    <li>HTML5, CSS3, JavaScript ES6+</li>
                                    <li>CSS3</li>
                                    <li>JavaScript ES6+</li>
                                </ul>
                            </li>
                            <li>modern UI libraries
                                <ul>
                                    <li>React-Bootstrap</li>
                                    <li>Motion for React</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </Card.Body>
            </Card>
        </Col>
    )
}
export default Design