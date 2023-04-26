import { projects } from '../../data/ProjectsList';
import Slide from './Slide';
import List from './List';

const Projects = () => {
    
    return (
        <>
            <Slide projects={projects} />
            <List projects={projects} />
        </>
    )
}
export default Projects