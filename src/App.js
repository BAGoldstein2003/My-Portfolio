import './App.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

function App() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const experienceBullets = [
    'Led a backend team of 3 developers to build scalable API services for an AI-powered Chrome extension',
    'Integrated Stripe Checkout with secure session handling and webhook infrastructure, enabling real-time payments',
    'Developed secure session handling using cookies to enable consistent user data retention',
    'Developed and maintained Python-based backend services for user-authentication, payment workflows, and selective data export',
    'Created and tracked technical tasks, milestones, and team responsibilities to keep development velocity consistent',
    'Collaborated with frontend and data engineers to align requirements and improve extension-to-backend communication',
    'Debugged and tested backend services to ensure full-functionality and secure handling of sensitive data',
    'Developed an end-to-end feature-tour mode with dynamic spotlighting to guide users through key product features, including tab architecture and export functionality',
    'Eliminated redundant cache writes in API endpoints, improving API response time (validated via Postman testing)'
  ]

  const projects = [
    {
      'name': 'BestScrape',
      'description': 'A web scraping tool that extracts and organizes price and product data from BestBuy',
      'technologies': ['Python', 'JavaScript', 'HTML', 'CSS', 'Flask', 'Selenium', 'React.js', 'Chart.js'],
      'link': 'https://bestscrape.onrender.com/'
    },
    {
      'name': 'Facial Recognition Timecard System',
      'description': 'A timecard system that uses facial recognition to verify employee identity and log work hours',
      'technologies': ['Python', 'OpenCV', 'Streamlit', 'SQLite', 'Facial Recognition', 'CSV Parsing'],
      'link': 'https://github.com/BAGoldstein2003/Facial-Recognition-Timecard-System'
    },
    {
      'name': 'AI Recipe Generator',
      'description': 'A web app that generates recipes based on user-inputted dietary restrictions, type of meal, and flavor profiles',
      'technologies': ['Python', 'JavaScript', 'HTML','CSS', 'Flask', 'OpenAI API', 'React.js'],
      'link': 'https://github.com/BAGoldstein2003/Recipe.AI'
    }
  ]

  return (
    <div className="App">
      <div className="projects-container" id ="my-projects">
        <div className="content">
          <h2>My Projects</h2>
          <div className='projects-list'>
            {
              projects.map((project, index) => {
                return (
                  <div className='project-item' key={index}>
                    <h3 className='project-name'>{project.name}</h3>
                    <p className='project-desc'>{project.description}</p>
                    <p className='project-tech'> Technologies: {project.technologies.join(', ')}</p>
                    <button className='project-link-button'>
                      <a className='project-link'href={project.link} target='_blank'>View Project</a>
                    </button>
                    
                  </div>  
                )
              })
            }
          </div>
        </div>
      </div>

      <div className="resume-container" id ="my-resume">
        <div className="content">
          <h2>My Resume</h2>
          <iframe id='resume' src='/BrianNewestResume.pdf#zoom=100' title="My Resume" width="100%" height="800px"></iframe>
        </div>

      </div>
      <div className="experience-container" id ="my-experience">
        <div className="content">
          <h2>My Experience</h2>
          <div className="experience-item">
            <h3>Lead Backend Developer Intern</h3>
            <h4>Hawl Technologies</h4>
            <h4 class="date">August 2025 - Present</h4>
            <ul>
              {
                experienceBullets.map((bullet, index) => {
                  return <li className="experience-bullet" key={index}>{bullet}</li>
                })
              }
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
