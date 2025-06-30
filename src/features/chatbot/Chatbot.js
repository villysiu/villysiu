import './chatbox.css';
import React, { useState, useRef } from 'react';
import axios from 'axios';
import {Search, Robot} from "react-bootstrap-icons";
import {Form, InputGroup, Spinner} from 'react-bootstrap';
import Conversations from './Conversations';
import {resume} from './resume';

const Chatbot = () =>{
    const [loading, setLoading] = useState(false);
    // const [error, setError] = useState('');
    const [userInput, setUserInput] = useState('');
    const [conversations, setConversations] = useState(['Hello, I am Villy\'s AI assistant. You can ask me anything about Villy.']);
    const conversationRef = useRef(null);

    const SpinnerMessage = (<Spinner animation="border" size="sm" />);

    const handleSubmit = async () =>{
        if (!userInput.trim()) return;

        setConversations(prev=>[...prev, userInput, SpinnerMessage]);
        setLoading(true);

        // console.log(prompt);
        setTimeout(() => {
                if (conversationRef.current) {
                    const container = conversationRef.current;
                    container.scrollTop = container.scrollHeight - container.clientHeight;
                }
            }, 100);
        try {
            const response = await axios.post(
                'https://remarkable-smakager-87809b.netlify.app/.netlify/functions/chat',
                {
                    userInput,
                    resume
                }
            );

            const botResponse = response.data.message;
            setConversations(prev => [...prev.slice(0, -1), botResponse]);

            // const botResponse = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            // setTimeout(()=>{
            //     setConversations(prev => [...prev.slice(0, -1), botResponse]);
            // }, 5000)
            
        } catch (error) {
            console.error('Error:', error);
            setConversations(prev => [...prev.slice(0, -1), 'Oops! Something went wrong.' ]);
        } finally {
            setLoading(false);
            setUserInput('');
        }
    }
    
    return(
        <div id="chatbot">
            <Robot size={40}/>
            <h2>Ask Anything about Villy</h2>
                <Conversations conversations={conversations} conversationRef={conversationRef} />

           
                <InputGroup>
                    <Form.Control
                        type="text"
                        placeholder="Example: can you code?"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    />
                    <InputGroup.Text>
                        <button
                         className='chatbot_search'
                        onClick={handleSubmit}
                        disabled={!userInput || loading} // Disable button if userInput is empty 
                        >
                            <Search />
                        </button>
                       
                    </InputGroup.Text>
                </InputGroup>

            
        </div>
    )
}
export default Chatbot;