import {Card, Col} from "react-bootstrap";
import {CodeSlash} from "react-bootstrap-icons";

const Frontend = () =>{
    return (
        <Col xs={12} xl={4}>
            <Card >
                <Card.Body>
                    <Card.Title>
                        <CodeSlash className="me-2"/><h2 style={{ display: 'inline'}}>Frontend Development</h2>
                    </Card.Title>

                    <div className='card-text'>
                        <ul>
                            <li>ReactJs/JavaScript</li>
                            <li>state management and handle asynchronous API calls and side effects
                                <ul>
                                    <li>React Redux</li>
                                    <li>Redux Toolkit</li>
                                    <li>Redux Thunk</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </Card.Body>
            </Card>
        </Col>
    )
}
export default Frontend