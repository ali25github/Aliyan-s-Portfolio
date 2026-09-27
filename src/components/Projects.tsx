import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'WatanConnect',
    subtitle: 'Full-Stack Services Platform for Overseas Pakistanis',
    description: 'A multi-role web platform covering remittance, employment, property, and facilitation services. Features a responsive, component-based UI architecture.',
    tech: ['Next.js', 'React.js', 'Express.js', 'PostgreSQL'],
    github: '#',
    live: '#'
  },
  {
    title: 'SurveilSnap',
    subtitle: 'AI-Driven Intelligent Surveillance System',
    description: 'A Django-based web dashboard for live monitoring and historical event search, consuming REST APIs from an AI-powered detection backend. Engineered video segmentation with FFmpeg.',
    tech: ['Django', 'OpenCV', 'YOLOv11', 'REST API', 'FFmpeg'],
    github: '#',
    live: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" style={{ paddingTop: '100px' }}>
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-glow)';
                e.currentTarget.style.boxShadow = '0 10px 30px -10px var(--accent-glow)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--panel-border)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={project.github} style={{ color: 'var(--text-secondary)' }}><FaGithub size={20} /></a>
                  <a href={project.live} style={{ color: 'var(--text-secondary)' }}><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <h4 style={{ fontSize: '1rem', color: 'var(--accent)', marginBottom: '1rem', fontWeight: 500 }}>{project.subtitle}</h4>
              
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, flexGrow: 1, marginBottom: '2rem' }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {project.tech.map(t => (
                  <span key={t} style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', fontWeight: 500 }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
