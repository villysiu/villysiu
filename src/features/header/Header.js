import './header.css';

const Header = () =>{
    return (

        <div id="navbar">

            <div className="navbar_content">
                {/*<div className="nav-text me-4">Home</div>*/}
                <div className="nav-text mx-4">About Me</div>
                <div className="nav-text mx-4">
                    <a href="#projects">Projects</a>
                </div>
                <div className="nav-text mx-4">
                    <a href="#skill">Tech Stack</a>
                </div>
                <div className="nav-text ms-4">
                    <a href="#contact">Contact</a>
                </div>

            </div>
        </div>

    )

}
export default Header