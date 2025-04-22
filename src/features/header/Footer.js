import {EnvelopeAtFill, Github, Linkedin} from "react-bootstrap-icons";
import './header.css';
const Footer = () =>{
    return (
        <div className="footer mt-5">
            <div><b>@2025 Villy Siu</b></div>
            <div className="mt-3">
                <a href="mailto:villysiu@gmail.com" className="me-3"><EnvelopeAtFill size={30}/></a>
                <a href="https://www.linkedin.com/in/villy-siu-384b81132/" target="_blank" className="me-3"><Linkedin
                    size={30} /></a>
                <a href="https://github.com/villysiu/yum_tea_sb" target="_blank"><Github size={30} /></a>
            </div>
        </div>
    )
}
export default Footer