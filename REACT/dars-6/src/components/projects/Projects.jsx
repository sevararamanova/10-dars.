import React from 'react';
import './Projects.css';
import peoject from '../../images/designer-project.jpeg';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    link: 'https://project2-link.com'
  },
  {
    title: 'Project 3',
    description: 'Description of project 2',
    link: 'https://project2-link.com'
  },
  {
    title: 'Project 4',
    description: 'Description of project 2',
    link: 'https://project2-link.com'
  },
  {
    title: 'Project 5',
    description: 'Description of project 2',
    link: 'https://project2-link.com'
  },
  {
    title: 'Project 6',
    description: 'Description of project 2',
    link: 'https://project2-link.com'
  },
  {
    title: 'Project 7',
    description: 'Description of project 2',
    link: 'https://project2-link.com'
  },
  {
    title: 'Project 8',
    description: 'Description of project 2',
    link: 'https://project2-link.com'
  },
  // Add 6 more projects
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
