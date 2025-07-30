import './Resume.css';

const Resume = () => {

  const resumeContent = {
    
    
    experience: [
      {
        company: "SmarterD",
        position: "Machine Learning Intern",
        duration: "May 2023 - October 2023",
        location: "San Francisco, CA",
        responsibilities: [
          `Built an NLP-powered classification pipeline to automatically label 10,000+ enterprise vulnerability records by type,
          achieving 90% accuracy using a Naive Bayes classifier, enabling clients to identify high-risk threats  instantly`,
          `Improved labeling by 65% using NLP and rule-based filtering to identify 500+ unique software names from
            100,000+ vulnerability tickets, allowing clients to prioritize remediation based on software specific risk exposure`,
          `Implemented zero-shot classification using Meta BART to assign mitigation actions to 4,000+ unstructured solution
            descriptions with 92% accuracy, cutting incident response times by 50% through intelligent automation`
        ]
      },
      {
        company: "Purdue University",
        position: "Undergraduate Teaching Assistant",
        duration: "August 2022 - December 2024",
        location: "West Lafayette, IN",
        responsibilities: [
          `Facilitated learning for 20+ students in weekly C programming labs by reinforcing theoretical concepts and
            providing hands-on guidance on practical programming techniques`
        ]
      }
    ],
    education: [
      {
        institution: "Purdue University",
        degree: "Bachelor of Science in Computer Science",
        duration: "August 2021 - December 2024",
        gpa: "3.47/4.0",
        coursework: ["Operating Systems", "Software Engineering", "Computer Networks", "Systems Programming",
           "Data Structures & Algorithms", "Computer Security", "Computer Architecture","Information Systems", "Cryptography","Object-Oriented Programming",
          "Software Engineering"]
      }
    ],
    skills: {
      "Programming Languages": [, "Python", "Java","C/C++","JavaScript","Swift"],
      "Frontend": ["React", "HTML5", "CSS3", "Tailwind CSS", "Next.js"],
      "Backend": ["Node.js", "FastAPI",  "Django", "Flask", "PostgreSQL", "MongoDB", "MySQL"],
      "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "Git"],
      "Machine Learning": ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "FinBert", "Meta BART"]
    },
    projects: [
      {
        name: "Stock Teller",
        url: "https://stockteller.chinmaybansal.com",
        description: "AI-powered stock analysis platform providing market insights and predictions to retail investors",
        technologies: ["FastAPI", "React", "PostgreSQL", "FinBERT", "Vader NLP", "Reddit API", "AlphaVantage API", "NewsAPI"]
      },
      {
        name: "Spotifight",
        description: "Real time fantasy football web app with musical artists. Compete with your friends!",
        technologies: ["MongoDB", "Next.js", "React","AWS", "Spotify API", "LastFM API", "Postman"]
      },
      {
        name: "WireMinnow",
        description: "Packet analysis tool to inspect network traffic through various protocols",
        technologies: ["C", "Computer Networks"]
      },
      {
        name: "Xinu OS Development",
        description: "Essential OS functionality to learn about essential operating system processes and optimizations",
        technologies: ["C", "Operating Systems"]
      },
      {
        name: "Quote Bot",
        description: "Twitter bot to display inspirational quotes daily",
        technologies: ["Python", "Twitter API", "AWS Lambda", "NinjaQuotes API"]
      },
      {
        name: "AI Music Composition",
        description: "Trained a LSTM neural networks for music generation on 500 MIDI files",
        technologies: ["Tensorflow", "Keras"]
      },{
        name: "PaddingSplit",
        url: "https://padding-split.vercel.app",
        description: "Developed a struct memory visualizer to help students understand padding in C",
        technologies: ["React", "Javascript","HTML", "CSS"]
      },
      
    ]
  };



  return (
    <section className="section resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        
        <div className="resume-controls">
          <a 
            href="/Chinmay_Bansal_Resume.pdf" 
            className="download-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
          </a>
        </div>

        <div className="resume-content">
          <div className="content-grid">
            <div className="left-column">
              <div className="resume-section">
                <h3 className="section-subtitle">Professional Experience</h3>
                {resumeContent.experience.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-header">
                      <h4 className="position">{exp.position}</h4>
                      <span className="company">{exp.company}</span>
                    </div>
                    <div className="experience-meta">
                      <span className="duration">{exp.duration}</span>
                      <span className="location">{exp.location}</span>
                    </div>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="resume-section">
                <h3 className="section-subtitle">Projects</h3>
                {resumeContent.projects.map((project, index) => (
                  <div key={index} className="project-item">
                    <div className="project-header">
                      <h4 className="project-name">{project.name}</h4>
                      {project.url && (
                        <div className="project-link">
                          <strong>Link: </strong>
                          <a href={project.url} target="_blank" rel="noopener noreferrer">
                            {project.url}
                          </a>
                        </div>
                      )}
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="right-column">
              <div className="resume-section">
                <h3 className="section-subtitle">Education</h3>
                {resumeContent.education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <h4 className="degree">{edu.degree}</h4>
                    <div className="education-details">
                      <span className="institution">{edu.institution}</span>
                      <span className="duration">{edu.duration}</span>
                    </div>
                    <p className="gpa">GPA: {edu.gpa}</p>
                    <div className="coursework">
                      <strong>Relevant Coursework:</strong>
                      <div className="coursework-tags">
                        {edu.coursework.map((course, courseIndex) => (
                          <span key={courseIndex} className="coursework-tag">{course}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="resume-section">
                <h3 className="section-subtitle">Technical Skills</h3>
                <div className="skills-grid">
                  {Object.entries(resumeContent.skills).map(([category, skills]) => (
                    <div key={category} className="skill-category">
                      <h4 className="skill-category-title">{category}</h4>
                      <div className="skill-tags">
                        {skills.map((skill, index) => (
                          <span key={index} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;