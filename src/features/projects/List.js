import Details from "./Details"
const List = ({projects})=>{
    return(
        <div className="project-list">
            {projects.map((project)=>{
                return(
                    <>
                    <Details project={project}/>
                    <hr/>
                    </>
                )
            })}
        </div>       
    )
}
export default List