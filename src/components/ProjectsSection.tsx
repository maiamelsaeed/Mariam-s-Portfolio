import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

// Import project images
import gameHouseImg from "@/assets/project-gamehouse.png";
import movieQImg from "@/assets/project-movieq.png";
import vestraImg from "@/assets/project-vestra.png";

const featuredProjects = [
  {
    title: "EcoCycle",
    description:
      "A scalable web application connecting users with eco-friendly recycling and donation services, enhanced with AI-powered DIY recommendations. Features RESTful APIs with Laravel, React front-end with Tailwind CSS, and Gemini AI integration for suggesting DIY project ideas.",
    tech: ["Laravel", "React", "Tailwind CSS", "React Query", "MySQL", "Gemini AI"],
    github: "#",
    live: "#",
    image: null,
    color: "from-emerald-500/20 to-teal-600/20",
  },
  {
    title: "BookShelf",
    description:
      "A full-stack e-commerce platform for selling books with secure authentication, RESTful APIs for product and order management, real-time shopping cart, and integrated payment processing. Built with focus on scalability and user experience.",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB"],
    github: "#",
    live: "#",
    image: null,
    color: "from-orange-500/20 to-amber-600/20",
  },
  {
    title: "MovieQ",
    description:
      "A movie discovery platform inspired by TMDB, featuring user authentication, personalized favorites list, and AI-powered chat-based movie recommendations using Cohere AI. Designed with responsive Angular front-end for smooth browsing across devices.",
    tech: ["Angular", "Firebase", "Cohere AI", "TypeScript"],
    github: "#",
    live: "#",
    image: movieQImg,
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
    image: gameHouseImg,
  },
  {
    title: "Vestra E-commerce",
    description: "Fully functional e-commerce website with user authentication, cart functionality with real-time updates, and order management using Firebase.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "#",
    live: "#",
    image: vestraImg,
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
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`bg-card border border-border/50 rounded-xl overflow-hidden`}
                >
                  {/* Project Image/Placeholder - Full Width */}
                  <div className={`relative aspect-video bg-gradient-to-br ${project.color} overflow-hidden group cursor-pointer`}>
                    {project.image ? (
                      <>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-all duration-500" />
                      </>
                    ) : (
                      <>
                        {/* Animated background pattern */}
                        <motion.div 
                          className="absolute inset-0 opacity-40"
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
                        <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-all duration-500" />
                        <div className="relative h-full flex items-center justify-center p-12">
                          <motion.span 
                            className="text-5xl md:text-6xl font-bold gradient-text"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {project.title}
                          </motion.span>
                        </div>
                      </>
                    )}
                    {/* Hover glow effect */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "radial-gradient(circle at center, hsl(var(--primary) / 0.2) 0%, transparent 70%)",
                      }}
                    />
                  </div>

                  {/* Project Info - Below Image */}
                  <div className="p-8 md:p-10">
                    <motion.p 
                      className="text-primary code-font text-sm mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      Featured Project
                    </motion.p>
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold text-foreground mb-5"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2.5 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="text-sm text-primary/90 code-font bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.5 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex gap-5">
                      <motion.a
                        href={project.github}
                        className="text-muted-foreground hover:text-primary transition-colors p-2"
                        aria-label="GitHub"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="text-muted-foreground hover:text-primary transition-colors p-2"
                        aria-label="Live Demo"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
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
                className="project-card overflow-hidden flex flex-col h-full group cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  {/* Overlay links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      className="p-2 rounded-full bg-background/80 text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="p-2 rounded-full bg-background/80 text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
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
                        className="text-xs text-primary/80 code-font bg-primary/10 px-2 py-1 rounded"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
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
