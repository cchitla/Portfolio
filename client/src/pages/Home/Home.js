import React from 'react'
import './Home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Name from '../../components/Name/Name';
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import projects from '../../projects.json';

function Home() {
  return (
      <div className="my-3 mx-4 text-center home">
        <Row className="align-items-center full-height">
          <Col md>
            <Name />
          </Col>

          <Col md>
            {projects.map(project => <ProjectCard key={project.title} data={project} />) }
        </Col>

        </Row>
      </div>
  )
}

export default Home
