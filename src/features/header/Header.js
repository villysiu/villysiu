import LinkedinLink from "./LinkedinLink"
import GithubLink from "./GithubLink"
import EmailMe from "./EmailMe"
import ResumeLink from "./ResumeLink"
const Header = () =>{
    return (
        <div className="header">
            <div className="header_left">       
                <div className="title">Villy Siu</div>
                
            </div>
            <div className="header_right">
                <div><EmailMe /></div>
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