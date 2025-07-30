import { useState } from 'react'
import './App.css'
import About from './components/About'
import PhotoGallery from './components/PhotoGallery'
import Resume from './components/Resume'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="app">
      <nav className="nav">
        <button 
          className={activeSection === 'about' ? 'active' : ''}
          onClick={() => setActiveSection('about')}
        >
          About Me
        </button>
        <button 
          className={activeSection === 'photos' ? 'active' : ''}
          onClick={() => setActiveSection('photos')}
        >
          Photos
        </button>
        <button 
          className={activeSection === 'resume' ? 'active' : ''}
          onClick={() => setActiveSection('resume')}
        >
          Resume
        </button>
      </nav>
      
      <main className="main">
        {activeSection === 'about' && <About />}
        {activeSection === 'photos' && <PhotoGallery />}
        {activeSection === 'resume' && <Resume />}
      </main>
    </div>
  )
}

export default App
