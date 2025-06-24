import './chatbox.css';
import React, { useState } from 'react';

import {Search, Robot} from "react-bootstrap-icons";
import {Form, InputGroup} from 'react-bootstrap';


const Chatbot = () =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [response, setResponse] = useState('');
    const [userInput, setUserInput] = useState('');
    return(
        <div id="chatbot">
            <Robot size={40}/>
            <h2>Ask Anything about Villy</h2>

            <Form>
                <InputGroup>
                    <Form.Control
                        type="text"
                        placeholder="Example: can you code?"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        // onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    />
                    <InputGroup.Text>

                        {/* <button
                            // className="search-btn"
                            // onClick={handleSubmit}
                            // disabled={!destination || loading} // Disable button if destination is empty
                        > */}
                            <Search 
                            // onClick={handleSubmit}
                            // disabled={!destination || loading} // Disable button if destination is empty 
                            />
                        {/* </button> */}


                    </InputGroup.Text>
                </InputGroup>

            </Form>
        </div>
    )
}
export default Chatbot;