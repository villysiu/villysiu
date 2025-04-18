import {useState, useEffect, useRef} from "react";
import {Card} from "react-bootstrap";
const SingleProject = ({project}) => {

    const [show, setShow] = useState(null)
    

    return (
        // <li key={project.title}
        //     // onMouseOver = {()=>setShow(true)}
        //     // onMouseOut = {()=>setShow(false)}
        // >
        //     <img src={project.image} className='project_thumb' />
        //     {
        //         show &&
        //         <div className="overlay">
        //
        //             <a className="project-link" href={project.web}>{project.title}</a>
        //             {project.tech_stack &&
        //             <a className="project-link" href={project.tech_stack}>Tech Stack</a>
        //             }
        //         </div>
        //     }
        // </li>
    <li>

            <img className="project_image" src={project.image}/>


        <div className="my-4">
        {
                project.web ?
                <a href ={project.web}><h2><strong>{project.title}</strong></h2></a>
            :
                    <h2><strong>{project.title}</strong></h2>
        }
        </div>


        <div>
            {
                project.desc &&
                <div className="mb-4">{project.desc}</div>
            }
            {
                project.youtube &&
                <span className="me-3"><a href={project.youtube}>Youtube</a></span>

            }
            {
                project.github && project.github.frontend &&
                <span className="me-3"><a href={project.github.frontend}>Frontend</a></span>
            }
            {
                project.github && project.github.backend &&
                <span><a href={project.github.backend}>Backend</a></span>
            }
        </div>
        {/*<Button variant="primary">Go somewhere</Button>*/}
    </li>
    )
}
export default SingleProject