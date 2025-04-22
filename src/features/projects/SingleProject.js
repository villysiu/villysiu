import {useState, useEffect, useRef} from "react";
const SingleProject = ({project}) => {

    return (
        <div>
            <img className="project_image" src={project.image}/>
            <div className="mx-3 my-4 d-flex flex-wrap align-items-center">
                <span className="me-3">
            {
                    project.web ?
                    <a href ={project.web}><strong>{project.title}</strong></a>
                    :
                    <strong>{project.title}</strong>
            }
            </span>
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

            <div className="mx-3">
                {
                    project.desc &&
                    <div className="mb-4">{project.desc}</div>
                }


            </div>
        </div>
    )
}
export default SingleProject