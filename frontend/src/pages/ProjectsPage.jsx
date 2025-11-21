import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { getDifficultyClass, getStars } from '../utils/helpers';
import '../styles/Projects.css';

export default function ProjectsPage() {
  const { data: projects, loading } = useFetch('/projects');
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects?.filter(p => p.category?.includes(filter));

  return (
    <main>
      <section className="projects section">
        <div className="container">
          <h1 className="section-title">All Projects</h1>
          <p className="section-subtitle">A collection of my best work</p>

          {/* Filter Buttons */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '48px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`btn ${filter === cat ? 'btn-primary' : 'btn-secondary'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading && <p className="projects-empty">Loading projects...</p>}

          {!loading && filteredProjects && filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
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
                    <p>{project.description}</p>

                    <span className={`project-badge ${getDifficultyClass(project.difficulty)}`}>
                      {project.difficulty}
                    </span>

                    <div className="project-tech">
                      {project.technologies?.map((tech, i) => (
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
            <p className="projects-empty">No projects found.</p>
          )}
        </div>
      </section>
    </main>
  );
}