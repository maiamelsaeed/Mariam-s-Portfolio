import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages & Concepts",
    skills: ["JavaScript", "TypeScript", "OOP", "Data Structures", "SQL", "MySQL", "NoSQL"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React.js", "Angular", "Tailwind CSS", "Chakra UI", "Bootstrap", "Redux", "React Query", "Zustand", "Vite"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "PHP", "Laravel", "RESTful APIs"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Linux", "Firebase", "Postman", "Apache Server"],
  },
  {
    title: "Soft Skills",
    skills: ["Public Speaking", "Research", "Teamwork", "Organization", "Presentation", "Agile"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
            <span className="text-primary code-font text-xl">03.</span>
            Skills & Technologies
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className={`gradient-border p-6 ${categoryIndex === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <h3 className="text-lg font-semibold text-primary mb-4 code-font">
                  {`<${category.title} />`}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.03,
                      }}
                      className="tech-badge"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground">
              <span className="text-primary code-font">Languages:</span>{" "}
              Arabic (Native) • English (Fluent)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
