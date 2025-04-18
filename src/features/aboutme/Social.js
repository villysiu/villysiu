import LinkedinLink from "./LinkedinLink";
import GithubLink from "./GithubLink";
import BlogLink from "./BlogLink";

const Social = () => {
    return (
        <div id="social" className="mt-5">
            Find me on


                <span className="ms-3 me-2"><LinkedinLink/></span>
                <span className="ms-2"><GithubLink/></span>
                <span className="ms-1"><BlogLink /></span>

        </div>
    )
}
export default Social