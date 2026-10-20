import { useState } from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'
import { ArrowUpRight, Menu, X, Code2 } from 'lucide-react'
import data from '../data/portfolio.json'

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { profile, navigation } = data

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <Link className="brand" to="/" onClick={closeMenu} aria-label="Sanjai home">
            <span className="brand-mark"><Code2 size={19} /></span>
            <span>SH<span className="brand-dot">.</span></span>
          </Link>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
            {navigation.map((item) => (
              <NavLink key={item.path} to={item.path} end={item.path === '/'} onClick={closeMenu}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                {item.label}
              </NavLink>
            ))}
            <a className="nav-cta" href={`mailto:${profile.email}`} onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Designed with care · Built with React</span>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}