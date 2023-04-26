import { Carousel } from "react-bootstrap"
import Details from "./Details"
const Slide = ({projects})=>{
    return(
        <Carousel variant="dark" interval={null}  >
            {projects.map((project)=>{
                return(
                <Carousel.Item>
                    <Details project={project}/>
                </Carousel.Item>
            )})}
        </Carousel>
    )
}
export default Slide