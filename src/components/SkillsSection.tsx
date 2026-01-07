import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Server, Database, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Concepts",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "OOP", "Data Structures", "SQL", "MySQL", "NoSQL"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frontend",
    icon: Code,
    skills: ["HTML", "CSS", "React.js", "Angular", "Tailwind CSS", "Chakra UI", "Bootstrap", "Redux", "React Query", "Zustand", "Vite"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "PHP", "Laravel", "RESTful APIs"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Linux", "Firebase", "Postman", "Apache Server"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Public Speaking", "Research", "Teamwork", "Organization", "Presentation", "Agile"],
    color: "from-rose-500 to-red-500",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

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
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setHoveredCategory(categoryIndex)}
                onHoverEnd={() => setHoveredCategory(null)}
                className={`relative overflow-hidden rounded-xl bg-card border border-border p-6 cursor-pointer ${
                  categoryIndex === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Animated gradient background on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0`}
                  animate={{ 
                    opacity: hoveredCategory === categoryIndex ? 0.1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Icon with animation */}
                <motion.div
                  className="mb-4 relative z-10"
                  animate={hoveredCategory === categoryIndex ? { 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  } : { rotate: 0, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon className="w-8 h-8 text-primary" />
                </motion.div>

                <h3 className="text-lg font-semibold text-foreground mb-4 relative z-10">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.03,
                      }}
                      whileHover={{ 
                        scale: 1.15,
                        backgroundColor: "hsl(var(--primary))",
                        color: "hsl(var(--primary-foreground))",
                      }}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary text-primary border border-primary/20 transition-colors cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Decorative corner */}
                <motion.div 
                  className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-primary/10"
                  animate={hoveredCategory === categoryIndex ? { 
                    scale: 3,
                    opacity: 0.2
                  } : { scale: 1, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Languages with animated underline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex justify-center gap-8"
          >
            {["Arabic (Native)", "English (Fluent)"].map((lang, index) => (
              <motion.div 
                key={lang}
                className="relative group"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-muted-foreground">
                  <span className="text-primary code-font">🌐</span> {lang}
                </span>
                <motion.div 
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
