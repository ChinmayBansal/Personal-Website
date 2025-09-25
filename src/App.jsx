import { useState } from 'react'
import './App.css'
import About from './components/About'
import PhotoGallery from './components/PhotoGallery'
import Resume from './components/Resume'
import Dock from './components/Dock'
import Silk from './components/Silk'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="app">
      <div className="silk-background">
        <Silk
          speed={5}
          scale={1}
          color="#041A40"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <Dock activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="main">
        {activeSection === 'about' && <About />}
        {activeSection === 'photos' && <PhotoGallery />}
        {activeSection === 'resume' && <Resume />}
      </main>
    </div>
  )
}

export default App
