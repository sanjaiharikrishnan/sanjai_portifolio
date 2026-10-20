import { ArrowUpRight, Copy, Mail, MapPin, Phone, Send } from 'lucide-react'
import data from '../data/portfolio.json'

export default function Contact() {
  const { profile } = data
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      alert('Email address copied.')
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }
  return (
    <div className="page">
      <section className="page-hero section-pad">
        <div className="container">
          <p className="eyebrow">CONTACT / 04</p>
          <h1>Have something<br /><span className="text-accent">good in mind?</span></h1>
          <p className="page-intro">If you're hiring for a full-stack .NET role, building a product, or want to exchange ideas about engineering, I'd be happy to connect.</p>
        </div>
      </section>
      <section className="section-pad section-tint">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">START A CONVERSATION</p>
            <h2>Let's make the<br />next thing <span className="text-accent">better.</span></h2>
            <p className="body-copy">Email is the best way to reach me. You can also find me on LinkedIn and LeetCode.</p>
            <a className="button button-primary contact-email-button" href={`mailto:${profile.email}?subject=${encodeURIComponent('Hello Sanjai')}`}>Send an email <Send size={16} /></a>
          </div>
          <div className="contact-details">
            <div className="contact-item"><div className="contact-icon"><Mail size={20} /></div><div><span>Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div><button className="copy-button" onClick={copyEmail} aria-label="Copy email"><Copy size={16} /></button></div>
            <div className="contact-item"><div className="contact-icon"><Phone size={20} /></div><div><span>Phone</span><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></div></div>
            <div className="contact-item"><div className="contact-icon"><MapPin size={20} /></div><div><span>Location</span><strong>{profile.location}</strong></div></div>
            <a className="social-row" href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><ArrowUpRight size={17} /></a>
            <a className="social-row" href={profile.leetcode} target="_blank" rel="noreferrer"><span>LeetCode</span><ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>
    </div>
  )
}