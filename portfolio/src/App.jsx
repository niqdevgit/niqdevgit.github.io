import React, { useState } from 'react';
import './App.css';

const projectsData = [
  {
    id: 1,
    title: 'Portfolio',
    link: 'https://niqdevgit.github.io',
    description: 'Site that you are viewing right now.',
    skills: ['HTML', 'CSS', 'React']
  },
  {
    id: 2,
    title: 'V.E.N.L.A',
    link: 'https://github.com/niqdevgit/V.E.N.L.A',
    description: 'Full-stack app',
    skills: ['React', 'Node.js', 'MongoDB', 'Docker', 'PWA']
  },
  {
    id: 3,
    title: 'netalice',
    link: 'https://github.com/walterairs/netalice',
    description: 'C app for internet speed testing with a UI. Developed with my classmate.',
    skills: ['C', 'Bash', 'Terminal', 'Teamwork']
  },
  {
    id: 4,
    title: 'ESP32photoresistor',
    link: 'https://github.com/walterairs/ESP32photoresistor',
    description: 'Embedded system project to calibrate a photoresistor. Group project.',
    skills: ['ESP32', 'Electronics', 'Teamwork']
  },
  {
    id: 5,
    title: 'clirpg',
    link: 'https://github.com/walterairs/clirpg',
    description: 'Command-line interface role-playing game. Group project.',
    skills: ['Python', 'OOP', 'Teamwork']
  }
];


const App = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const filteredProjects = projectsData.filter(project =>
    project.skills.some(skill => skill.toLowerCase().includes(filter))
  );

  return (
    <div className="App">
      <h1>Projects</h1>
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Filter by skill (e.g., React)"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>

      <div className="projects-list">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <h2><a href={project.link}>{project.title}</a></h2>
              <p>{project.description}</p>
              <div className="skills">
                {project.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No projects match your filter criteria.</p>
        )}
      </div>
    </div>
  );
};

export default App;
