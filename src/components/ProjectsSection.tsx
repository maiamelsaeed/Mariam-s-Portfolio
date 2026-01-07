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
    color: "from-emerald-500/20 to-teal-600/20",
  },
  {
    title: "BookShelf",
    description:
      "A full-stack e-commerce platform for selling books with secure authentication, RESTful APIs for product and order management, real-time shopping cart, and integrated payment processing. Built with focus on scalability and user experience.",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB"],
    github: "#",
    live: "#",
    color: "from-orange-500/20 to-amber-600/20",
  },
  {
    title: "MovieQ",
    description:
      "A movie discovery platform inspired by TMDB, featuring user authentication, personalized favorites list, and AI-powered chat-based movie recommendations using Cohere AI. Designed with responsive Angular front-end for smooth browsing across devices.",
    tech: ["Angular", "Firebase", "Cohere AI", "TypeScript"],
    github: "#",
    live: "#",
    color: "from-purple-500/20 to-pink-600/20",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-16 mb-20"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className={`relative grid md:grid-cols-12 gap-6 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                {/* Project Image/Placeholder */}
                <motion.div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? "md:col-start-6 md:order-2" : ""
                  }`}
                  whileHover={{ scale: 1.03, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.color} rounded-lg overflow-hidden group cursor-pointer border border-border/50`}>
                    {/* Animated background pattern */}
                    <motion.div 
                      className="absolute inset-0 opacity-30"
                      animate={{ 
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                      }}
                      style={{
                        backgroundImage: "radial-gradient(circle at 20% 80%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--primary)) 0%, transparent 50%)",
                        backgroundSize: "200% 200%",
                      }}
                    />
                    <div className="absolute inset-0 bg-card/80 group-hover:bg-card/60 transition-all duration-500" />
                    <div className="relative h-full flex items-center justify-center p-8">
                      <motion.span 
                        className="text-4xl md:text-5xl font-bold gradient-text"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {project.title}
                      </motion.span>
                    </div>
                    {/* Hover glow effect */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "radial-gradient(circle at center, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Project Info */}
                <div
                  className={`md:col-span-6 md:absolute ${
                    index % 2 === 1 ? "md:left-0" : "md:right-0"
                  } md:top-1/2 md:-translate-y-1/2 z-10`}
                >
                  <motion.p 
                    className="text-primary code-font text-sm mb-2"
                    initial={{ opacity: 0, x: index % 2 === 1 ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    Featured Project
                  </motion.p>
                  <motion.h3 
                    className="text-xl md:text-2xl font-bold text-foreground mb-4"
                    whileHover={{ x: index % 2 === 1 ? -5 : 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.div 
                    className="bg-card/95 backdrop-blur-sm p-5 rounded-lg shadow-xl border border-border/50 mb-4"
                    whileHover={{ 
                      boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.2)",
                      borderColor: "hsl(var(--primary) / 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>
                  <div
                    className={`flex flex-wrap gap-2 mb-4 ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="text-xs text-primary/80 code-font bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div
                    className={`flex gap-4 ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    <motion.a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors p-2"
                      aria-label="GitHub"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="text-muted-foreground hover:text-primary transition-colors p-2"
                      aria-label="Live Demo"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Other Projects */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-foreground">
              Other Noteworthy Projects
            </h3>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-5"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {otherProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.25)",
                }}
                className="project-card p-6 flex flex-col h-full group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-5">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Folder className="w-10 h-10 text-primary" />
                  </motion.div>
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors p-1"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="text-muted-foreground hover:text-primary transition-colors p-1"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                <motion.h4 
                  className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h4>
                <p className="text-muted-foreground text-sm flex-1 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="text-xs text-muted-foreground code-font hover:text-primary transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
