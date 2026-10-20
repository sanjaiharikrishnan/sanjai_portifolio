import { ArrowUpRight, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <article className={`project-card project-card-${index % 3}`}>
      <div className="project-card-top">
        <span className="project-index">0{index + 1}</span>
        <span className="project-type">{project.type}</span>
        {project.url
          ? <a className="icon-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ExternalLink size={17} /></a>
          : <span className="icon-link muted-icon"><ArrowUpRight size={17} /></span>}
      </div>
      <p className="project-subtitle">{project.subtitle}</p>
      <h3>{project.name}</h3>
      <p className="project-overview">{project.overview}</p>
      <ul className="project-highlights">
        {project.highlights.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
      </ul>
      <div className="tag-list">
        {project.stack.map((tech) => <span className="tag" key={tech}>{tech}</span>)}
      </div>
      {project.url && <a className="text-link" href={project.url} target="_blank" rel="noreferrer">View live project <ArrowUpRight size={15} /></a>}
    </article>
  )
}