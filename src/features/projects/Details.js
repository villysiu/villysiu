
const Details = ({project}) => {
    return (
        <div className="project-info">
            <h3 >{project.title}</h3>
            <img className="carousel-img"
                src={project.image}
                alt={project.title}
            />
            <div>

            {project.web && 
                <a href={project.web}>Web</a>
                
            }
            
            &nbsp;
            { project.github&& project.github.frontend && 
                <a href={project.github.frontend}>GitHub</a>
}
&nbsp;
            {project.youtube && 
                <a href={project.youtube}>YouTube</a>}
            
            </div>
        </div>
    )
}
export default Details