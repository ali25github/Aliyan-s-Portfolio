import "./styles/TechStackNew.css";
import { config } from "../config";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

const techIcons: Record<string, TechItem> = {
  "React.js": { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev" },
  "Next.js": { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", url: "https://nextjs.org" },
  "JavaScript": { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  "TypeScript": { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://typescriptlang.org" },
  "Tailwind CSS": { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com" },
  "Bootstrap": { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", url: "https://getbootstrap.com" },
  "HTML5": { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  "CSS3": { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  "Node.js": { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org" },
  "Express.js": { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", url: "https://expressjs.com" },
  "PostgreSQL": { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", url: "https://postgresql.org" },
  "MongoDB": { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://mongodb.com" },
  "Python": { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://python.org" },
  "Git": { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
  "GitHub": { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com" },
  "Postman": { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", url: "https://postman.com" },
};

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>
        
        <div className="techstack-sections">
          <div className="techstack-category">
            <h3>{config.skills.develop.title}</h3>
            <div className="techstack-grid">
              {config.skills.develop.tools.map((techName, index) => {
                const tech = techIcons[techName];
                if (!tech) return null;
                return (
                  <a
                    key={index}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="techstack-item"
                    title={tech.name}
                    data-cursor="disable"
                  >
                    <img src={tech.icon} alt={tech.name} loading="lazy" decoding="async" />
                    <span>{tech.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="techstack-category">
            <h3>{config.skills.design.title}</h3>
            <div className="techstack-grid">
              {config.skills.design.tools.map((techName, index) => {
                const tech = techIcons[techName];
                if (!tech) return null;
                return (
                  <a
                    key={index}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="techstack-item"
                    title={tech.name}
                    data-cursor="disable"
                  >
                    <img src={tech.icon} alt={tech.name} loading="lazy" decoding="async" />
                    <span>{tech.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
