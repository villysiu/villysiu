import "./aboutme.css"

import Social from "./Social";
import ResumeButton from "./ResumeButton";
const AboutMe = () =>{
    return (
        <div id="aboutme">
            <div className="aboutme_wrapper">
                <div className="aboutme_text w-75">
                    <h1><strong>Hello, I am <span className="gradient-text">Villy Siu.</span></strong></h1>
                    <div>I am a Fullstack Engineer with a Bachelor's in Computer Science and a background in accounting and property management. I excel in agile methodologies, translating designs into scalable, readable code with object-oriented practices, and deploying applications efficiently.
                    </div>
                    <Social />
                    <div className="mt-5 text-center">
                        <ResumeButton />
                    </div>
                </div>
                <div className="w-25">
                    <img id="profile" src="https://github.com/villysiu/villysiu/blob/main/src/data/images/villysiu.jpeg?raw=true" alt="Villy Siu" />
                </div>
            </div>
        </div>
    )
}
export default AboutMe