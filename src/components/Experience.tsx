import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: 'Front-End Web Development Intern',
    company: 'Cygnetic Software Pvt. Ltd.',
    date: 'June 2024 - Sept 2024',
    icon: <Briefcase size={20} />,
    points: [
      'Developed responsive, cross-browser-compatible user interfaces using React.js, Next.js, and Tailwind CSS.',
      'Collaborated with UI/UX designers to translate Figma mockups into interactive, pixel-accurate pages.',
      'Optimized website performance and utilized Git/GitHub for Agile/Scrum version control.'
    ]
  },
  {
    title: 'Data Entry Assistant',
    company: 'Falcons Pvt. Ltd.',
    date: 'Previous',
    icon: <Briefcase size={20} />,
    points: [
      'Maintained accurate data entry and documentation for core business processes.',
      'Strengthened attention to detail and data handling applicable to QA workflows.'
    ]
  },
  {
    title: 'BSc Software Engineering',
    company: 'Foundation University, Islamabad',
    date: '2022 - 2026',
    icon: <GraduationCap size={20} />,
    points: [
      'Focus on modern software architecture, web technologies, and AI systems.',
      'Led final year project "SurveilSnap" incorporating AI-Driven Intelligent Surveillance.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" style={{ paddingTop: '100px' }}>
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience & <span className="gradient-text">Education</span>
        </motion.h2>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div style={{ position: 'absolute', left: '24px', top: '0', bottom: '0', width: '2px', background: 'var(--panel-border)' }} className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ position: 'relative', paddingLeft: '70px', marginBottom: '3rem' }}
            >
              {/* Icon Circle */}
              <div style={{ 
                position: 'absolute', 
                left: '8px', 
                top: '0', 
                width: '34px', 
                height: '34px', 
                borderRadius: '50%', 
                background: 'var(--bg-color)', 
                border: '2px solid var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                zIndex: 2
              }}>
                {exp.icon}
              </div>

              <div className="glass" style={{ padding: '2rem', transition: 'transform 0.3s' }} 
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{exp.title}</h3>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-secondary)', fontWeight: 500 }}>{exp.company}</h4>
                  </div>
                  <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {exp.date}
                  </span>
                </div>
                
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {exp.points.map((point, i) => (
                    <li key={i} style={{ lineHeight: 1.6 }}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 600px) {
          .timeline-line { left: 16px !important; }
          div[style*="paddingLeft: '70px'"] { padding-left: 50px !important; }
          div[style*="left: '8px'"] { left: 0 !important; }
        }
      `}</style>
    </section>
  );
}
