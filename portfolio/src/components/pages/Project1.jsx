
import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects.json';
import './Style.scss';
import { Link, Route, Routes } from 'react-router-dom';

function SoloProject() {


  
  const { id } = useParams();
  const project = projects.find(project => project.id === id);

  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (!project) {

    return (<div className = "titlestyle">

      <h1>Project close-up</h1>

<h4>Use the portfolio gallery to select a project to inspect. </h4>
       <h4>Alternatively, roll the dice...</h4>
      <div className="dice">
       
       <Link to={`/project/${randomNumber}`}>
          <img src='./assets/DICE-02.png' alt="Dice" />
        </Link>
      </div>
      </div>
    );
   ;
  }



  const { title, deploylink, repolink, image, description } = project;

  return (
    <div >
      <h2>{title}</h2>

      <div>
     
      <div className = "soloimg"><img src={image} alt={title} className="soloprojectview"  />
      </div>
      </div>
      <h4 className="desc">{description}</h4>

      <div className="wrap-flexy">

      <a href={repolink} target="_blank" rel="noopener noreferrer"><h3>Repo</h3></a>
      <a href={deploylink} target="_blank" rel="noopener noreferrer"><h3>Deployed</h3></a>
      </div>

      <div className="dice">
        <Link to={`/project/${randomNumber}`}>
          <img src='./assets/DICE-02.png' alt="Dice" width="200px" />
        </Link>
      </div>

      
     
    </div>
  );
}

export default SoloProject;