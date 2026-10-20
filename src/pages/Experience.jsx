import { BriefcaseBusiness, GraduationCap, MapPin } from 'lucide-react'
import data from '../data/portfolio.json'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Experience() {
  return (
    <div className="page">
      <section className="page-hero section-pad">
        <div className="container">
          <p className="eyebrow">EXPERIENCE / 03</p>
          <h1>Learning by<br /><span className="text-accent">building.</span></h1>
          <p className="page-intro">My professional journey, the systems I've worked on, and the foundation behind my engineering practice.</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <SectionHeading eyebrow="CAREER JOURNEY" title="Professional experience." />
          <div className="timeline">
            {data.experience.map((job, i) => <article className="timeline-item" key={`${job.company}-${job.role}`}>
              <div className="timeline-marker"><BriefcaseBusiness size={18} /></div>
              <div className="timeline-content">
                <div className="timeline-top"><div><p className="eyebrow">{job.period}</p><h3>{job.role}</h3><p className="company-name">{job.company}</p></div>{job.current && <span className="current-badge">Current role</span>}</div>
                <p className="location-line"><MapPin size={14} /> {job.location}</p>
                <ul className="detail-list">{job.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </article>)}
          </div>
        </div>
      </section>
      <section className="section-pad section-tint">
        <div className="container education-layout">
          <div><SectionHeading eyebrow="EDUCATION" title="The foundation." /><p className="body-copy">A computer science foundation that supports my work in application design, problem-solving, and software engineering.</p></div>
          {data.education.map((item) => <article className="education-card" key={item.institution}>
            <div className="education-icon"><GraduationCap size={23} /></div><p className="eyebrow">{item.period}</p><h3>{item.qualification}</h3><p className="company-name">{item.institution}</p><p className="location-line"><MapPin size={14} /> {item.location}</p><span className="education-result">{item.result}</span>
          </article>)}
        </div>
      </section>
    </div>
  )
}