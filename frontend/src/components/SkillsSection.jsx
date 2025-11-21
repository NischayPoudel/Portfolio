export default function SkillsSection() {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: '🎨',
      skills: ['React', 'JavaScript', 'CSS', 'HTML', 'Responsive Design'],
      proficiency: [95, 90, 95, 95, 90],
    },
    {
      name: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs'],
      proficiency: [90, 92, 88, 90],
    },
    {
      name: 'DevOps & Tools',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker'],
      proficiency: [95, 90, 95, 85, 75],
    },
    {
      name: 'Other Skills',
      icon: '🧠',
      skills: ['Problem Solving', 'Team Collaboration', 'Chess Strategy', 'Hiking'],
      proficiency: [95, 90, 92, 88],
    },
  ];

  return (
    <section className="skills-section section">
      <div className="container">
        <h2 className="section-title">🛠️ My Tech Arsenal</h2>
        <p className="section-subtitle">Skills that power my projects</p>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.name}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-name">
                      {skill}
                      <span className="skill-percent">
                        {category.proficiency[skillIndex]}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${category.proficiency[skillIndex]}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}