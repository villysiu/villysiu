import {useState, useEffect, useRef} from "react";
const SingleProject = ({project}) => {

    const [show, setShow] = useState(null)
    

    return (
        <div key={project.title} className='box'
            onMouseOver = {()=>setShow(true)}
            onMouseOut = {()=>setShow(false)}
        >
            <img src={project.image} className='thumb' />
            {
                show && 
                <div className="overlay">
                   
                    <a className="project-link" href={project.web}>{project.title}</a>
                    {project.tech_stack &&
                    <a className="project-link" href={project.tech_stack}>Tech Stack</a> 
                    }
                </div>
            }
        </div>   
    )
}
export default SingleProject