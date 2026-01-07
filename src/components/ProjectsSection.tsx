import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "EcoCycle",
    description:
      "A scalable web application connecting users with eco-friendly recycling and donation services, enhanced with AI-powered DIY recommendations. Features RESTful APIs with Laravel, React front-end with Tailwind CSS, and Gemini AI integration for suggesting DIY project ideas.",
    tech: ["Laravel", "React", "Tailwind CSS", "React Query", "MySQL", "Gemini AI"],
    github: "#",
    live: "#",
  },
  {
    title: "BookShelf",
    description:
      "A full-stack e-commerce platform for selling books with secure authentication, RESTful APIs for product and order management, real-time shopping cart, and integrated payment processing. Built with focus on scalability and user experience.",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "MovieQ",
    description:
      "A movie discovery platform inspired by TMDB, featuring user authentication, personalized favorites list, and AI-powered chat-based movie recommendations using Cohere AI. Designed with responsive Angular front-end for smooth browsing across devices.",
    tech: ["Angular", "Firebase", "Cohere AI", "TypeScript"],
    github: "#",
    live: "#",
  },
];

const otherProjects = [
  {
    title: "Game House",
    description: "RAWG clone web app using their API. Features client state management with Zustand and server state with React Query.",
    tech: ["React", "Vite", "TypeScript", "Zustand", "React Query", "Chakra UI"],
    github: "#",
    live: "#",
  },
  {
    title: "Vestra E-commerce",
    description: "Fully functional e-commerce website with user authentication, cart functionality with real-time updates, and order management using Firebase.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
            <span className="text-primary code-font text-xl">04.</span>
            Projects
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

          {/* Featured Projects */}
          <div className="space-y-24 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? "md:col-start-6" : ""
                  }`}
                >
                  <div className="project-card aspect-video bg-gradient-to-br from-primary/20 via-secondary to-card flex items-center justify-center overflow-hidden group">
                    <div className="text-center p-6">
                      <span className="text-5xl font-bold gradient-text">
                        {project.title}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`md:col-span-6 md:absolute ${
                    index % 2 === 1 ? "md:left-0" : "md:right-0"
                  } md:top-1/2 md:-translate-y-1/2`}
                >
                  <p className="text-primary code-font text-sm mb-2">
                    Featured Project
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <div className="bg-card p-6 rounded-lg shadow-xl border border-border mb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div
                    className={`flex flex-wrap gap-3 mb-4 ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-primary/80 code-font bg-primary/5 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`flex gap-4 ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground">
              Other Noteworthy Projects
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="project-card p-6 flex flex-col h-full group"
              >
                <div className="flex items-center justify-between mb-6">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm flex-1 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground code-font"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
