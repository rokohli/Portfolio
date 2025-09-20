import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// Components
const Header = ({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <a href="#home" className="logo">RK</a>
        <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
          <li><a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Computer Engineering Student @ UIUC';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img 
            src="/headshot.jpg" 
            alt="Rohan Kohli Professional Headshot"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = '<i class="fas fa-user"></i>';
            }}
          />
        </div>
        <h1>Rohan Kohli</h1>
        <p className="subtitle">{displayText}</p>
        <p className="description">
          Passionate about building innovative solutions through software engineering, 
          full-stack development, and hardware design. Currently pursuing Computer Engineering at UIUC.
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="btn btn-primary">
            <i className="fas fa-envelope"></i>
            Let's Connect
          </a>
          <a href="/Rohan_Kohli_Resume.pdf" className="btn btn-secondary" download>
            <i className="fas fa-download"></i>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Striim Inc., Palo Alto, CA",
      date: "Jul 2023 – Aug 2023",
      description: [
        "Developed and tested Java-based solutions for code migration, improving system efficiency by 20%",
        "Collaborated with senior engineers to refine and debug system processes, contributing to software stability",
        "Gained hands-on experience with PostgreSQL and MySQL, establishing databases and optimizing performance"
      ],
      techStack: ["Java", "PostgreSQL", "MySQL", "Database Optimization"]
    },
    {
      title: "Electrical Team Member",
      company: "EV Concept, Champaign, IL",
      date: "Aug 2024 – Present",
      description: [
        "Designed electrical subsystems for an electric vehicle, including battery management and power distribution",
        "Assisted the embedded team in interfacing rearview camera systems with vehicle electronics and display modules",
        "Set up vehicle sensor infrastructure to support autonomous driving and improve real-time situational awareness"
      ],
      techStack: ["Electrical Design", "Embedded Systems", "Sensor Integration", "Autonomous Systems"]
    },
    {
      title: "Founder & Computer Hardware Specialist",
      company: "Custom PC Building Business, Burlingame, CA",
      date: "Jun 2020 – Jan 2024",
      description: [
        "Customized high-performance PCs for gaming, creative, and professional use, generating $1,000+ in revenue",
        "Delivered advanced overclocking services, boosting speeds by 20–30% while maintaining safe thermal levels",
        "Guided clients through component selection by balancing performance, compatibility, and cost efficiency"
      ],
      techStack: ["Hardware Assembly", "Overclocking", "Performance Optimization", "Customer Service"]
    },
    {
      title: "Camp Counselor",
      company: "ThinkBridge Summer Camp, Pacifica, CA",
      date: "Jun 2022 – Jul 2022",
      description: [
        "Mentored underprivileged students in completing STEM-based projects, involving coding and critical thinking",
        "Collaborated with camp staff to create an inclusive and nurturing environment to encourage camper engagement"
      ],
      techStack: ["STEM Education", "Mentorship", "Leadership", "Team Collaboration"]
    }
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title fade-in">Professional Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item fade-in">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
              </div>
              <span className="experience-date">{exp.date}</span>
            </div>
            <div className="experience-description">
              <ul>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="tech-stack">
              {exp.techStack.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title fade-in">Education</h2>
      <div className="education-card fade-in">
        <div className="education-header">
          <div>
            <h3 className="education-degree">Bachelor of Science in Computer Engineering</h3>
            <p className="education-school">University of Illinois, Urbana-Champaign (UIUC)</p>
          </div>
          <span className="education-date">Aug 2024 – Dec 2027</span>
        </div>
        <div className="experience-description">
          <p><strong>Relevant Coursework:</strong></p>
          <ul>
            <li>Computer Systems and Programming</li>
            <li>Introduction to Computing</li>
            <li>Introduction to Electronics</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sound-Activated LED Switch (\"Modern Clapper\")",
      date: "Apr 2025 - May 2025",
      association: "University of Illinois Urbana-Champaign",
      description: "Designed and built a sound-activated switching circuit that toggles an LED on/off in response to a loud clap. Implemented a microphone, LM358 op-amp amplifier, and BJT latch to reliably detect sharp audio signals while minimizing noise. Strengthened skills in circuit design, debugging, and oscilloscope signal analysis, learning how small changes in component values impact real-world performance.",
      techStack: ["Circuit Design", "Analog Electronics", "Signal Processing", "Oscilloscope Analysis"],
      category: "Hardware"
    },
    {
      title: "RecipeGram",
      date: "2024",
      description: "Built a full-stack web application for sharing recipes with a responsive frontend and backend. Implemented database schemas and queries to support user interactions, ensuring data integrity and scalability. Worked alongside the frontend team to define API endpoints and optimize user experience.",
      techStack: ["Full-Stack Development", "Database Design", "API Development", "React.js", "Node.js"],
      category: "Software"
    },
    {
      title: "Anagram Dictionary System",
      date: "2024",
      description: "Designed an anagram dictionary system that groups words by sorted character signature using a binary tree. Constructed a templated binary search tree in C++ with insertion, deletion, lookup, and traversal operations. Developed file I/O pipelines to read dictionary files and save ordered anagram groupings.",
      techStack: ["C++", "Data Structures", "Binary Trees", "Algorithm Design", "File I/O"],
      category: "Software"
    },
    {
      title: "Vending Machine Controller",
      date: "2024",
      description: "Engineered combinational logic in SystemVerilog to generate and dispense outputs based on coin input states. Reduced the area of hardware design using only NAND, NOR, and NOT gates for future breadboard deployment. Implemented efficient logic circuits for real-world hardware applications.",
      techStack: ["SystemVerilog", "Digital Logic", "Hardware Design", "Circuit Optimization"],
      category: "Hardware"
    }
  ];

  // Group projects by category
  const softwareProjects = projects.filter(p => p.category === "Software");
  const hardwareProjects = projects.filter(p => p.category === "Hardware");

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <div key={index} className="project-card fade-in">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        {project.date && (
          <span className="project-date">{project.date}</span>
        )}
      </div>
      {project.association && (
        <p className="project-association">
          <i className="fas fa-university"></i>
          {project.association}
        </p>
      )}
      <p className="project-description">{project.description}</p>
      <div className="tech-stack">
        {project.techStack.map((tech: string, i: number) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" className="section">
      <h2 className="section-title fade-in">Projects & Portfolio</h2>
      
      {/* Hardware Projects */}
      <div className="project-category fade-in">
        <h3 className="category-title">
          <i className="fas fa-microchip"></i>
          Hardware & Circuit Design
        </h3>
        <div className="projects-grid">
          {hardwareProjects.map((project, index) => (
            <ProjectCard key={`hardware-${index}`} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Software Projects */}
      <div className="project-category fade-in">
        <h3 className="category-title">
          <i className="fas fa-code"></i>
          Software Development
        </h3>
        <div className="projects-grid">
          {softwareProjects.map((project, index) => (
            <ProjectCard key={`software-${index}`} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      skills: ["Java", "Python", "C/C++", "JavaScript", "Swift", "Assembly"]
    },
    {
      title: "Web Technologies",
      icon: "fas fa-laptop-code",
      skills: ["HTML/CSS", "React.js", "Node.js", "SwiftUI"]
    },
    {
      title: "Databases & Tools",
      icon: "fas fa-database",
      skills: ["PostgreSQL", "MySQL", "Git", "AWS", "Figma", "Replit"]
    },
    {
      title: "Hardware & Systems",
      icon: "fas fa-microchip",
      skills: ["Verilog", "SystemVerilog", "Digital Logic", "Embedded Systems", "Circuit Design"]
    },
    {
      title: "Data & Analytics",
      icon: "fas fa-chart-line",
      skills: ["NumPy", "Pandas", "Data Analysis", "Algorithm Design"]
    },
    {
      title: "Soft Skills",
      icon: "fas fa-users",
      skills: ["Team Leadership", "Project Management", "Problem Solving", "Mentorship", "Communication", "Client Relations"]
    }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title fade-in">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-category fade-in">
            <h3><i className={category.icon}></i> {category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ContactSection = () => {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (navigator.clipboard) {
      e.preventDefault();
      navigator.clipboard.writeText('kohli10@illinois.edu').then(() => {
        const target = e.currentTarget;
        const originalText = target.textContent;
        target.textContent = 'Email copied!';
        setTimeout(() => {
          target.textContent = originalText;
          window.location.href = 'mailto:kohli10@illinois.edu';
        }, 2000);
      });
    }
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title fade-in">Let's Connect</h2>
      <div className="contact-content fade-in">
        <p className="contact-description">
          I'm always interested in new opportunities and collaborations. 
          Whether you have a project in mind or just want to connect, feel free to reach out!
        </p>
        
        <div className="contact-methods">
          <a href="mailto:kohli10@illinois.edu" className="contact-item" onClick={handleEmailClick}>
            <i className="fas fa-envelope"></i>
            <span>kohli10@illinois.edu</span>
          </a>
          <a href="tel:+16504849316" className="contact-item">
            <i className="fas fa-phone"></i>
            <span>(650) 484-9316</span>
          </a>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Champaign, IL</span>
          </div>
        </div>

        <div className="social-links">
          <a href="https://linkedin.com/in/rohan-kohli-7b627a327" className="social-link" title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/rokohli" className="social-link" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="social-link" title="Portfolio">
            <i className="fas fa-globe"></i>
          </a>
          <a href="mailto:kohli10@illinois.edu" className="social-link" title="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        <div className="cta-buttons">
          <a href="mailto:kohli10@illinois.edu" className="btn btn-primary">
            <i className="fas fa-paper-plane"></i>
            Send Message
          </a>
          <a href="/Rohan_Kohli_Resume.pdf" className="btn btn-secondary" download>
            <i className="fas fa-download"></i>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Rohan Kohli. Built with Next.js for innovation and clean code.</p>
    </footer>
  );
};

// Main Page Component
export default function Home() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId!);
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Head>
        <title>Rohan Kohli - Computer Engineering Student @ UIUC</title>
        <meta name="description" content="Computer Engineering student at UIUC with experience in software engineering, full-stack development, and hardware design. Passionate about building innovative solutions." />
        <meta name="keywords" content="Computer Engineering, Software Development, Java, Python, React, Full Stack Developer, UIUC, Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
      </Head>

      <div className={inter.className}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="main">
          <Hero />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}