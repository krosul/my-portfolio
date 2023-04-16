import React from 'react';
import timberliLandingPage from './images/TimberliLandingPage.png';
import timberliHomePage from './images/TimberliHome.png';
import timberliContributionPage from './images/TimberliContribution.png';
import ShareMe from './images/share-me.png';
import PokeApp from './images/poke-app.png';
import OpenJira from './images/OpenJira.png';
import './Projects.css';
export default function Projects() {
  const projects = [
    {
      name: 'Share me',
      description: 'Pagina inspirada en pinterest ',
      technologies: 'React,Sanity.io y tailwindcss',
      link: 'https://share-me-pi.netlify.app',
      // repository: "https://github.com/krosul/Pi-dogs",
      images: [ShareMe],
    },
    {
      name: 'Poke-App',
      description: 'Pagina estatica sobre pokemons',
      technologies: 'Next.js,typescrypt y MaterialUI',
      link: 'https://poke-roan-one.vercel.app',
      repository: 'https://github.com/krosul/poke',
      images: [PokeApp],
    },
    {
      name: 'Timberli',
      description: 'Timberli Es una pagina web dedicada a developers',
      technologies: 'React,Node.js y CSS',
      link: 'https://proyecto-final-orcin-seven.vercel.app',
      repository: 'https://github.com/Proyecto-Timberli/proyecto-final',
      images: [timberliContributionPage, timberliHomePage, timberliLandingPage],
    },
    {
      name: 'Open Jira',
      description: 'Pagina inspirada en Jira',
      technologies: 'React,Typescript,Node y mongoDB',
      link: 'https://03-open-jira-seven.vercel.app',
      repository: 'https://github.com/krosul/03-open-jira',
      images: [OpenJira],
    },
  ];
  return (
    <div id="container-projects" className="container-projects">
      <h1>Proyectos realizados</h1>
      <div className="container">
        {projects.map((project, index) => (
          <article key={index} className="container-Project  ">
            <img className="img-projects" alt={project.name} src={project.images[0]} />
            <h1 className="title-card">{project.name}</h1>
            <p className="project-description">{project.description}</p>
            <div className="div-links">
              {/* <p>{project.technologies}</p> */}
              <div className="links">
                <a className="links" href={project.link} target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="links-svg-deploy"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path>
                    <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path>
                    <path d="M16 21l0 -2"></path>
                    <path d="M19 16l2 0"></path>
                    <path d="M3 8l2 0"></path>
                    <path d="M8 3l0 2"></path>
                  </svg>
                </a>
                {project.repository && (
                  <a className="links" href={project.repository} target="_blank" rel="noreferrer">
                    <svg
                      className="links-svg-github"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
