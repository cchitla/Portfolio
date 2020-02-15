import React from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
  return (
    <div className="project-card">
      <a  target="_blank" rel="noopener noreferrer" href={props.data.url}>
        <img className="project-link" width="440" height="200" src={props.data.image}></img>
      </a>
      <br></br>
      <h5><a className="git-link" target="_blank" rel="noopener noreferrer" href={props.data.github}>
        <img height="20" src="/resources/images/github.png"></img> {props.data.title}
      </a></h5>

    </div>
  );
};

export default ProjectCard;
