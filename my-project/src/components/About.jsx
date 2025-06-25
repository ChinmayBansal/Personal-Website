import './About.css';

const About = () => {
  return (
    <section className="section about">
      <div className="container">
        <div className="about-hero">
          <div className="profile-section">
            <div className="profile-image">
              <img 
                src="/ProfilePhoto/DSC_0959.JPG"
                //ProfilePhoto/DSC_0959.JPG
                alt="Profile" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="profile-placeholder">
                <div className="placeholder-icon">👤</div>
                <span>Your Photo Here</span>
              </div>
            </div>
            <div className="profile-details">
              <h1 className="name" style={{fontFamily: 'Georgia, serif', fontWeight: 'bold'}}>Chinmay Bansal</h1>
              <p className="title">Software Engineer</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/chinmaybansal30/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/ChinmayBansal" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="mailto:chinmaybansalsc@outlook.com" className="social-link">Email</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-content">
          <div className="content-grid">
            <div className="left-column">
              <div className="bio-section">
                <h2 className="section-subtitle">About Me</h2>
                <div className="bio-text">
                  <p>
                    Welcome to my personal space! I'm passionate about creating meaningful experiences 
                    through technology and design. Here you'll find a curated collection of my work, 
                    thoughts, and the moments I've captured through my lens.
                  </p>
                  <p>
                    Whether it's developing innovative solutions, exploring new technologies, or 
                    capturing the perfect shot, I'm always looking for ways to combine creativity 
                    with technical excellence.
                  </p>
                </div>
              </div>
              
              <div className="quote-section">
                <div className="quote-content">
                  <blockquote className="quote-text">
                    “The most important thing is to enjoy your life—to be happy—it’s all that matters.” —Steve Jobs
                  </blockquote>
                </div>
              </div>

              <div className="quote-section">
                <div className="quote-content">
                  <blockquote className="quote-text">
                   "I can accept failure. Everyone fails at something. But I can't accept not trying." —Michael Jordan
                  </blockquote>
                </div>
              </div>
            </div>

             
            
            <div className="skills-section">
              <h3 className="skills-title">What I Do</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">💻</div>
                  <h4>Development</h4>
                  <p>Building modern web applications with cutting-edge technologies</p>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">📷</div>
                  <h4>Photography</h4>
                  <p>Capturing moments and telling stories through visual narratives</p>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🎨</div>
                  <h4>Design</h4>
                  <p>Creating intuitive and beautiful user experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;