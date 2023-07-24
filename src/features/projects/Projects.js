import { projects } from '../../data/ProjectsList';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';

const Projects = () => {
    const [showInfo, setShowInfo] = useState(null)
    const handleMouseOver = (project) => setShowInfo(project.title)
    
    return (
        <Container fluid>
            <Row style={{ justifyContent: 'center' }}>
                {projects.map((project)=>{
                    return (
                        <Col key={project.title} md={4} className='box'>
                            <Image src={project.image} 
                                className='thumb' 
                                onMouseOver = {()=>handleMouseOver(project)}
                                onMouseOut = {()=>setShowInfo(null)}
                            />
                            {
                                showInfo === project.title && 
                                <div className="overlay"
                                    onMouseOver = {()=>handleMouseOver(project)}
                                    onMouseOut = {()=>setShowInfo(null)}
                                >
                                    <div>
                                        <h5><a href={project.web}>{project.title}</a></h5>
                                    </div>
                                    <div>
                                        <h5><a href={project.tech_stack}>Tech Stack</a>  </h5>
                                    </div>
                                </div>
                            }
                            
                            
                                
                            
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}
export default Projects