import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Experience from './pages/Experience.jsx'
import Contact from './pages/Contact.jsx'

function NotFound() {
  return <section className="page-hero section-pad"><div className="container"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>Looks like this<br /><span className="text-accent">route got lost.</span></h1><a className="button button-primary" href="/">Back home</a></div></section>
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}