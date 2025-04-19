import './header.css';

const Header = () =>{
    return (

        <div id="navbar">

            <div className="navbar_content">
                {/*<div className="nav-text me-4">Home</div>*/}
                <a href="#aboutme" className="nav_button">
                    <div>
                        About Me
                    </div>
                </a>

                <a href="#projects" className="nav_button">
                    <div>
                        Projects
                    </div>
                </a>
                <a href="#skill" className="nav_button">
                    <div>
                        Tech Stack
                    </div>
                </a>
                <a href="#contact" className="nav_button">
                    <div>
                        Contact Me
                    </div>
                </a>


            </div>
        </div>

    )

}
export default Header