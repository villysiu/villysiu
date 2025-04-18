import { Envelope } from "react-bootstrap-icons"
const EmailMe = () =>{
    return (
        <div style={{display: "flex"}}>
            <a href="mailto:villysiu@gmail.com" ><Envelope color="royalblue" size={20}/></a>
            &nbsp;<a href="mailto:villysiu@gmail.com" >villysiu@gmail.com</a> 
        </div>
    )
    
}
export default EmailMe