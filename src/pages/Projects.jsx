import { useState } from 'react'
import { ArrowUpRight, ExternalLink, FolderGit2 } from 'lucide-react'
import data from '../data/portfolio.json'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const types = ['All', ...new Set(data.projects.map((p) => p.type))]
  const visibleProjects = filter === 'All' ? data.projects : data.projects.filter((p) => p.type === filter)
  return (
    <div className="page">
      <section className="page-hero section-pad">
        <div className="container">
          <p className="eyebrow">PROJECTS / 02</p>
          <h1>Work built to solve<br /><span className="text-accent">real problems.</span></h1>
          <p className="page-intro">A selection of full-stack applications, backend services, and integrations I've contributed to.</p>
        </div>
      </section>
      <section className="section-pad section-tint">
        <div className="container">
          <div className="project-filter-row">
            <SectionHeading eyebrow="SELECTED PROJECTS" title={`${visibleProjects.length.toString().padStart(2, '0')} projects`} />
            <div className="filter-group" aria-label="Filter projects">
              {types.map((type) => <button key={type} className={`filter-button ${filter === type ? 'selected' : ''}`} onClick={() => setFilter(type)}>{type}</button>)}
            </div>
          </div>
          <div className="projects-grid projects-page-grid">
            {visibleProjects.map((project, i) => <article className={`project-card project-card-${i % 3}`} key={project.id}>
              <div className="project-card-top"><span className="project-index">0{i + 1}</span><span className="project-type">{project.type}</span><FolderGit2 size={19} className="project-folder-icon" /></div>
              <p className="project-subtitle">{project.subtitle}</p><h3>{project.name}</h3><p className="project-overview">{project.overview}</p>
              <ul className="project-highlights">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="tag-list">{project.stack.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
              {project.url && <a className="text-link" href={project.url} target="_blank" rel="noreferrer">Visit project <ExternalLink size={15} /></a>}
            </article>)}
          </div>
          {/* <p className="portfolio-note">Project details reflect my contributions. Please contact me if you'd like to discuss implementation details.</p> */}
        </div>
      </section>
      <section className="section-pad">
        <div className="container mini-cta"><div><p className="eyebrow">WANT TO KNOW MORE?</p><h2>Let's talk through the details.</h2></div><a className="button button-primary" href={`mailto:${data.profile.email}`}>Email me <ArrowUpRight size={16} /></a></div>
      </section>
    </div>
  )
}