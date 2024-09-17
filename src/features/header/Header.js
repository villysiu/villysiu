import LinkedinLink from "./LinkedinLink"
import GithubLink from "./GithubLink"
import EmailMe from "./EmailMe"
import ResumeLink from "./ResumeLink"
const Header = () =>{
    return (
        <div className="header">
            
            <div className="title">Villy Siu</div>
                
            
            <div className="header_contacts">
                <EmailMe />
                <div className="social_media">
                    <ResumeLink />
                    <LinkedinLink />
                    <GithubLink />
                </div>
            </div>

        </div>
    )

}
export default Header