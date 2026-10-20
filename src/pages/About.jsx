import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import data from '../data/portfolio.json'
import SectionHeading from '../components/SectionHeading.jsx'

export default function About() {
  const { profile, skills, principles } = data
  return (
    <div className="page">
      <section className="page-hero section-pad">
        <div className="container">
          <p className="eyebrow">ABOUT ME / 01</p>
          <h1>Engineer with a<br /><span className="text-accent">product mindset.</span></h1>
          <p className="page-intro">I enjoy turning requirements into dependable software — balancing technical quality, user needs, and the practical realities of shipping.</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container about-content-grid">
          <div>
            <SectionHeading eyebrow="MY STORY" title="Full-stack by practice." />
            <p className="body-copy">{profile.summary}</p>
            <p className="body-copy">My day-to-day work spans backend services, data access, asynchronous integrations, and React interfaces. I care about readable code, clear architecture, and features that solve a real problem.</p>
            <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16} /></a>
          </div>
          <aside className="about-note">
            <span className="quote-mark">“</span>
            <h3>Build it clearly.<br />Make it reliable.<br /><span className="text-accent">Keep learning.</span></h3>
            <p>The principles I try to bring to every feature, review, and collaboration.</p>
          </aside>
        </div>
      </section>
      <section className="section-pad section-tint">
        <div className="container">
          <SectionHeading eyebrow="TECHNICAL TOOLKIT" title="Tools I work with." description="Grouped by how I use them across application development." />
          <div className="skills-grid">
            {skills.map((group) => <article className="skill-card" key={group.category}>
              <h3>{group.category}</h3>
              <div className="tag-list">{group.items.map((item) => <span className="tag tag-large" key={item}>{item}</span>)}</div>
            </article>)}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <SectionHeading eyebrow="HOW I WORK" title="Principles behind the code." />
          <div className="principles-list">
            {principles.map((item, i) => <article className="principle-row" key={item.title}>
              <span className="principle-number">0{i + 1}</span>
              <h3>{item.title}</h3><p>{item.description}</p><CheckCircle2 size={20} />
            </article>)}
          </div>
        </div>
      </section>
    </div>
  )
}