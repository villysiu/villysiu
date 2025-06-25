import { Github } from "react-bootstrap-icons"

const GithubLink = () =>{
    return (
        // <OverlayTrigger placement="bottom" overlay={<Tooltip>Github</Tooltip>}>
        //     <span className="social_media_icon" >
                <a href="https://github.com/villysiu" target="_blank" rel="noreferrer">
                    <Github size={30}/>
                </a>
            // </span>
        // </OverlayTrigger>
        
    )
    
}
export default GithubLink
