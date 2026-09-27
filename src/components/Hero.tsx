import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Environment, Float } from '@react-three/drei';

function AnimatedShape() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} scale={2.2}>
        <MeshDistortMaterial 
          color="#2dd4bf"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', position: 'relative' }}>
      <div className="section-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center', width: '100%' }}>
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}
          >
            Frontend Software Engineer
          </motion.div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Hi, I'm <br />
            <span className="gradient-text">Sheikh Aliyan</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '500px' }}>
            A passionate React.js & Next.js Developer dedicated to building responsive, accessible, and highly interactive user interfaces.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a 
              href="#projects" 
              style={{ 
                background: 'var(--text-primary)', 
                color: 'var(--bg-color)', 
                padding: '0.8rem 2rem', 
                borderRadius: '30px', 
                fontWeight: 600,
                transition: 'transform 0.2s',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              View Work
            </a>
            <a 
              href="#contact" 
              style={{ 
                background: 'transparent', 
                color: 'var(--text-primary)', 
                border: '1px solid var(--panel-border)',
                padding: '0.8rem 2rem', 
                borderRadius: '30px', 
                fontWeight: 600,
                transition: 'all 0.2s',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--panel-border)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ height: '500px', width: '100%', position: 'relative' }}
          className="hero-canvas-container"
        >
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <AnimatedShape />
            <Environment preset="city" />
          </Canvas>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .section-container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          h1 {
            font-size: 3rem !important;
          }
          .hero-canvas-container {
            height: 350px !important;
          }
          p {
            margin: 0 auto 2.5rem auto !important;
          }
          div[style*="display: flex; gap: 1rem"] {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
