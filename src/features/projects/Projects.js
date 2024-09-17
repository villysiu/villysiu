import { projects } from '../../data/ProjectsList';
import SingleProject from "./SingleProject"

const Projects = () => {
    
    
    return (
        <div className="app-row">
            {projects.map((project)=>{
                return <SingleProject project={project} />
            })}
        </div>
    )
}
export default Projects