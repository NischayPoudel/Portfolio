import { useFetch } from '../hooks/useFetch';
import { getDifficultyClass, getStars } from '../utils/helpers';
import '../styles/Projects.css';

export default function Projects() {
  const { data: projects, loading } = useFetch('/projects');

  if (!Array.isArray(projects)) {
    return (
      <section className="projects section">
        <div className="container">
          <h2 className="section-title">Epic Quests (Projects)</h2>
          <p className="projects-empty">No projects available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="projects section">
      <div className="container">
        <h2 className="section-title">Epic Quests (Projects)</h2>

        {loading && <p className="projects-empty">Loading projects...</p>}

        {!loading && projects.length > 0 ? (
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project._id} className="project-card">
                <div className="project-image">
                  <img
                    src={project.heroImage || 'https://via.placeholder.com/400x200'}
                    alt={project.title}
                  />
                  <div className="project-image-overlay">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title="Live Demo"
                      >
                        🔗
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title="GitHub Code"
                      >
                        🐙
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>

                  <span className={`project-badge ${getDifficultyClass(project.difficulty)}`}>
                    {project.difficulty}
                  </span>

                  <div className="project-tech">
                    {project.technologies?.slice(0, 3).map((tech, i) => (
                      <span key={i} className="project-tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-rating">
                    {getStars(project.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="projects-empty">No projects yet. Check back soon!</p>
        )}
      </div>
    </section>
  );
}