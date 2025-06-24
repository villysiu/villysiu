import {Robot, PersonFill} from "react-bootstrap-icons";

const Conversations = ({conversations, conversationRef}) =>{
    return (
        <div className='conversation'  ref={conversationRef}>      
                    {
                        conversations.map((conversation, idx)=>{
                            return(
                                 idx%2===0 ? 
                                     <div key={idx} className='conversation_left'>
                                        <div><Robot size={25}/></div>
                                        <div className='conversation_left_text' >{conversation}</div>
                                    </div>
                                    :
                                     <div key={idx} className='conversation_right'>
                                        
                                        <div className='conversation_right_text' >{conversation}</div>
                                        <div><PersonFill size={30}/></div>
                                    </div>
                            )    
                            
                        })
                        
                    } 
                </div>
    )
}
export default Conversations