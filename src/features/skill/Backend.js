import {Card, Col} from "react-bootstrap";
import {CodeSlash} from "react-bootstrap-icons";

const Backend = () =>{
    return (
        <Col xs={12} xl={4} >
            <Card >
                <Card.Body>
                    <Card.Title>
                        <CodeSlash className="me-2"/><h2 style={{ display: 'inline'}}>Backend Development</h2>
                    </Card.Title>

                    <div className='card-text'>
                        <ul>
                            <li>Java/Springboot</li>
                            <li>MySQL</li>
                            <li>Python/Django</li>
                        </ul>
                    </div>

                </Card.Body>
            </Card>
        </Col>
    )
}
export default Backend