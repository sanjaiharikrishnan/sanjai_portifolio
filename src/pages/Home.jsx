import { Link } from 'react-router-dom'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Braces, Database, Layers3, Send } from 'lucide-react'
import data from '../data/portfolio.json'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Home() {
  const { profile, skills, experience, projects } = data
  const featured = projects.filter((p) => p.featured)

  return (
    <>
      <section className="hero section-pad" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="status-line"><span className="status-dot" /> {profile.availability}</div>
            <p className="eyebrow">HELLO, I'M {profile.name.toUpperCase()}</p>
            <h1>Building digital<br /><span className="text-accent">experiences</span> that work.</h1>
            <p className="hero-description">{profile.summary}</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/projects">Explore my work <ArrowUpRight size={17} /></Link>
              <Link className="button button-quiet" to="/contact">Get in touch <ArrowRight size={16} /></Link>
            </div>
            <div className="hero-meta">
              <span><span className="meta-dot" /> Based in {profile.location}</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode <ArrowUpRight size={13} /></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="code-window">
              <div className="window-bar"><span /><span /><span /><small>developer.ts</small></div>
              <div className="code-content">
                <p><span className="code-muted">01</span> <span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</p>
                <p><span className="code-muted">02</span> &nbsp; name: <span className="code-green">'Sanjai'</span>,</p>
                <p><span className="code-muted">03</span> &nbsp; role: <span className="code-green">'Full-Stack Engineer'</span>,</p>
                <p><span className="code-muted">04</span> &nbsp; backend: [<span className="code-green">'.NET'</span>, <span className="code-green">'C#'</span>],</p>
                <p><span className="code-muted">05</span> &nbsp; frontend: [<span className="code-green">'React'</span>],</p>
                <p><span className="code-muted">06</span> &nbsp; mindset: <span className="code-green">'Build & learn'</span></p>
                <p><span className="code-muted">07</span> {'}'}</p>
                <p className="code-cursor-line"><span className="code-muted">08</span> <span className="cursor" /></p>
              </div>
            </div>
            <div className="floating-chip chip-api"><Braces size={16} /><span>Clean APIs</span></div>
            <div className="floating-chip chip-data"><Database size={16} /><span>Reliable data</span></div>
            <div className="floating-chip chip-arch"><Layers3 size={16} /><span>Scalable systems</span></div>
            <div className="visual-caption">Curious by nature. Engineer by craft.</div>
          </div>
        </div>
        <a href="#expertise" className="scroll-cue"><ArrowDownRight size={16} /> SCROLL TO EXPLORE</a>
      </section>

      <section className="trust-strip">
        <div className="container trust-inner">
          <span>MY EVERYDAY TOOLKIT</span>
          {['C# / .NET', 'React.js', 'SQL Server', 'RabbitMQ', 'Redis'].map((x) => <strong key={x}>{x}</strong>)}
        </div>
      </section>

      <section className="section-pad" id="expertise">
        <div className="container">
          <SectionHeading eyebrow="WHAT I BRING" title="Engineering from both sides." description="From designing APIs and data flows to crafting responsive interfaces, I enjoy making the whole product work better." />
          <div className="expertise-grid">
            {[
              { number: '01', title: 'Backend engineering', icon: <Braces />, text: 'Well-structured REST APIs, service boundaries, and dependable business logic built with the .NET ecosystem.' },
              { number: '02', title: 'Frontend development', icon: <Layers3 />, text: 'Clear, responsive React interfaces that connect users to complex workflows without adding friction.' },
              { number: '03', title: 'Data & performance', icon: <Database />, text: 'Thoughtful SQL queries, caching, and asynchronous messaging to keep applications responsive and resilient.' }
            ].map((item) => <article className="expertise-card" key={item.number}>
              <div className="expertise-card-head"><span>{item.number}</span><div className="expertise-icon">{item.icon}</div></div>
              <h3>{item.title}</h3><p>{item.text}</p><div className="card-rule" />
            </article>)}
          </div>
        </div>
      </section>

      <section className="section-pad section-tint">
        <div className="container">
          <div className="section-row">
            <SectionHeading eyebrow="SELECTED WORK" title="A few things I've built." description="Real-world platforms, integrations, and workflows." />
            <Link className="text-link desktop-link" to="/projects">All projects <ArrowRight size={16} /></Link>
          </div>
          <div className="projects-grid">{featured.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}</div>
          <div className="mobile-center"><Link className="button button-secondary" to="/projects">View all projects <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container about-band">
          <div className="about-band-copy">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Good software is built with <span className="text-accent">curiosity</span> and care.</h2>
            <p>I like breaking down business problems, collaborating with teammates, and delivering maintainable solutions. I’m also growing my knowledge of Azure and distributed systems.</p>
            <Link className="text-link" to="/about">More about my approach <ArrowRight size={16} /></Link>
          </div>
          <div className="about-stat-grid">
            <div className="stat-card"><strong>3+</strong><span>Years of experience</span></div>
            <div className="stat-card"><strong>.NET</strong><span>Core backend stack</span></div>
            <div className="stat-card"><strong>Full</strong><span>Stack delivery</span></div>
            <div className="stat-card"><strong>Always</strong><span>Learning and improving</span></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div><p className="eyebrow">HAVE A ROLE OR PROJECT IN MIND?</p><h2>Let's build something<br /><span className="text-accent">meaningful.</span></h2></div>
          <Link className="button button-primary" to="/contact">Start a conversation <Send size={16} /></Link>
        </div>
      </section>
    </>
  )
}