import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "RESTful APIs",
    "Git",
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-8">
            <span className="text-primary code-font text-xl">01.</span>
            About Me
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm Mariam, a passionate Full Stack Developer based in Cairo, Egypt. 
                I specialize in building modern, scalable, and user-focused web applications 
                that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I graduated from the{" "}
                <span className="text-primary">Information Technology Institute (ITI)</span>{" "}
                with intensive training in Full Stack Web Development, where I gained hands-on 
                experience with both front-end and back-end technologies through collaborative 
                projects and real-world scenarios.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm working at{" "}
                <span className="text-primary">iLamp Marketing & Software Solutions</span>,
                where I lead end-to-end development of multiple web projects, implementing 
                scalable backend logic and delivering modern, responsive interfaces with a 
                strong emphasis on usability and design consistency.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Here are some technologies I've been working with:
              </p>

              <ul className="grid grid-cols-2 gap-2 mt-4">
                {technologies.map((tech, index) => (
                  <motion.li
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary">▹</span>
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="relative group">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10" />
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary/50">MA</span>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 -z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
