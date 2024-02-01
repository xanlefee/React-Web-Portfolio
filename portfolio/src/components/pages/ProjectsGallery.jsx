import Project from './Project';
import projects from '../data/projects.json';
//import React from 'react';
import './Style.scss';
import { Link, Route, Routes } from 'react-router-dom';
import SoloProject from './Project1';
import './Style.scss';








function ProjectsGallery() {




    return <div>

      <h1 className="titlestyle1">Project Gallery</h1>
     

        <div className = "row row-cols-1 row-cols-md-2 g-4">
          
           { projects.map((project) => {
            return ( <div> 
              <Project key={project.id}
               title={project.title} 
               description={project.description}
                image={project.image}
                repolink={project.repolink}
                deploylink={project.deploylink} />





                
           <div className="btnCenter"><button className="expand"> <Link to={`/project/${project.id}`}>
              Expand
              </Link>
              </button>
              </div>
      
   
         
          </div> 
            )
          
      
           })}
           
        </div>
    </div>
    
}



export default ProjectsGallery;