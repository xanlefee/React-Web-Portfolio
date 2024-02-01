import React from 'react';
import ReactDom from "react-dom";
import './Style.scss';
import { Link, Route, Routes } from 'react-router-dom';
import SoloProject from './Project1';

function Project(props) {



    return <div className="card">

        <img className="card-img-top" src={props.image}></img>
        <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer">


            <div className="wrap-flexy">
                <a href={props.repolink} target="_blank" rel="noopener noreferrer" className="linkz"><h5>Repo</h5></a>
                <a href={props.deploylink} target="_blank" rel="noopener noreferrer" className="linkz"><h5>Deployed</h5></a>
            </div>


        </div>
    </div>









}

export default Project;