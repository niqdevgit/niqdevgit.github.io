import { useState } from 'react';
import './App.css';

//TODO add fixed size to cards, desc and skills can wrap. Tell more about each project.
//add images. Add intrest in info section eg. DevOps CI/CD git Docker...
//better styling?

const projectsData = [
  {
    id: 1,
    title: 'Portfolio',
    link: 'https://niqdevgit.github.io',
    description: 'Site that you are viewing right now.',
    startdate: '8-2024',
    skills: ['HTML', 'CSS', 'React']
  },
  {
    id: 2,
    title: 'V.E.N.L.A',
    link: 'https://github.com/niqdevgit/V.E.N.L.A',
    description: 'Full-stack app',
    startdate: '11-2023',
    skills: ['React', 'Node.js', 'MongoDB', 'Docker', 'PWA']
  },
  {
    id: 3,
    title: 'netalice',
    link: 'https://github.com/walterairs/netalice',
    description: 'C app for internet speed testing with a UI. Developed with my classmate.',
    startdate: '2-2023',
    skills: ['C', 'Bash', 'Terminal', 'Teamwork']
  },
  {
    id: 4,
    title: 'ESP32photoresistor',
    link: 'https://github.com/walterairs/ESP32photoresistor',
    description: 'Embedded system project to calibrate a photoresistor. Group project.',
    startdate: '11-2023',
    skills: ['ESP32', 'Electronics', 'Teamwork']
  },
  {
    id: 5,
    title: 'clirpg',
    link: 'https://github.com/walterairs/clirpg',
    startdate: '4-2023',
    description: 'Command-line interface role-playing game. Group project.',
    skills: ['Python', 'OOP', 'Teamwork']
  }
];


const App = () => {
  const [filter, setFilter] = useState('');
  const [orderBy, setOrderBy] = useState('title-asc');

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const handleOrderChange = (e) => {
    setOrderBy(e.target.value);
  };

  const parseDateMMYYYY = (dateStr) => {
    const [month, year] = dateStr.split('-').map(Number);
    return new Date(year, month - 1); // Months are zero-based in JS Date
  };
  

  const filteredProjects = projectsData
  .filter(project =>
    project.skills.some(skill => skill.toLowerCase().includes(filter))
  )
  .sort((a, b) => {
    switch (orderBy) {
      case 'id-asc':
        return a.id - b.id;
      case 'id-desc':
        return b.id - a.id;
      case 'title-asc':
        return a.title.localeCompare(b.title);
      case 'title-desc':
        return b.title.localeCompare(a.title);
      case 'startdate-asc':
        return parseDateMMYYYY(a.startdate) - parseDateMMYYYY(b.startdate);
      case 'startdate-desc':
        return parseDateMMYYYY(b.startdate) - parseDateMMYYYY(a.startdate);
      default:
        return 0;
    }
  });
  

  return (
    <div className="App">
      <h1>Hello! Nice to see you here 👋</h1>
      <span>Find my education and work history on <a href='https://www.linkedin.com/in/niklassuvitie/'>LinkedIn</a></span>
      <br></br>
      <span><a href='https://niqdevgit.github.io/blog'>View my blog</a></span>
      <br></br>
      <span>Here are my personal or school projects. <br></br>
       My professional works are not included here. <br></br>
       Click any title to view project site.</span>
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Filter by skill (e.g., React)"
          value={filter}
          onChange={handleFilterChange}
        />
        <select value={orderBy} onChange={handleOrderChange}>
          <option value="id-asc">ID (Ascending)</option>
          <option value="id-desc">ID (Descending)</option>
          <option value="title-asc">Name (A-Z)</option>
          <option value="title-desc">Name (Z-A)</option>
          <option value="startdate-asc">Start Date (Ascending)</option>
          <option value="startdate-desc">Start Date (Descending)</option>
        </select>
      </div>

      <div className="projects-list">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <h3><a href={project.link}>{project.title}</a></h3>
              <p>{project.description}</p>
              <p>Start: {project.startdate}</p>
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
