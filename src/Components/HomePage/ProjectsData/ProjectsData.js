import React, { useEffect, useState } from 'react';
import './ProjectsData.css';
import dataProject from '../../FakeData/ProjectData/ProjectData.json';
import ProjectsDataDetails from '../ProjectsDataDetails/ProjectsDataDetails';


const ProjectsData = () => {
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        console.log(dataProject);
        setProjectsData(dataProject);
    }, [])
    return (
        <div>
        <h2 className="pt-5 mt-5 container-fluid text-center heading">Some of <span>My Projects</span></h2>
            {
                projectsData.map(project => <ProjectsDataDetails project={project}></ProjectsDataDetails>)
            }
        </div>
    );
};

export default ProjectsData;