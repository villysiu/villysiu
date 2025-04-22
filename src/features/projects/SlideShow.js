import React, { useRef } from 'react';
import './slideshow.css';
import {projects} from "./projectData"
import SingleProject from "./SingleProject";
import {ArrowLeftCircleFill, ArrowRightCircleFill} from "react-bootstrap-icons";
const SlideShow = () => {
    const containerRef = useRef(null);

    const scrollByAmount = (offset) => {
        console.log(containerRef.current)
        containerRef.current.scrollBy({
            left: offset,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className="slideshow-buttons">
                <ArrowLeftCircleFill className="nav-button" onClick={() => scrollByAmount(-300)} />
                <ArrowRightCircleFill className="nav-button" onClick={() => scrollByAmount(300)} />
                {/*<button className="nav-button left" onClick={() => scrollByAmount(-300)}>&larr;</button>*/}
                {/*<button className="nav-button right" onClick={() => scrollByAmount(300)}>&rarr;</button>*/}
            </div>

    <div className="slideshow-wrapper mt-3">
        {/*<div className="slideshow-buttons">*/}
        {/*    <button className="nav-button left" onClick={() => scrollByAmount(-300)}>&larr;</button>*/}
        {/*    <button className="nav-button right" onClick={() => scrollByAmount(300)}>&rarr;</button>*/}
        {/*    </div>*/}
            <div className="slideshow-container" ref={containerRef}>
                {projects.map((project, index) => (
                    <div className="slide" key={index}>
                        <SingleProject project={project}/>
                    </div>
                ))}
            </div>


        </div>
        </>
    );
};

export default SlideShow;