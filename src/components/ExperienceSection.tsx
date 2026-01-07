import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "iLamp Marketing & Software Solutions Agency",
    location: "Cairo, Egypt",
    period: "September 2025 – Present",
    description: [
      "Led end-to-end development of multiple web projects, handling both frontend and backend responsibilities",
      "Implemented scalable backend logic and APIs using Node.js and TypeScript",
      "Delivered modern, responsive web interfaces using React with strong emphasis on usability and design consistency",
      "Built and integrated RESTful APIs using Node.js to support scalable and secure backend services",
      "Designed and implemented responsive, user-friendly interfaces with focus on UI/UX best practices",
      "Optimized application performance and ensured cross-browser compatibility",
    ],
  },
  {
    title: "Full Stack Development Trainee",
    company: "Information Technology Institute (ITI)",
    location: "Cairo, Egypt",
    period: "March 2025 – September 2025",
    description: [
      "Completed 4-month intensive training program focusing on Full Stack Web Development",
      "Gained hands-on experience with React, Angular, Node.js, and PHP",
      "Built real-world projects through collaborative learning environments",
      "Developed strong technical and problem-solving skills",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
            <span className="text-primary code-font text-xl">02.</span>
            Experience
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="experience-card"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.title}{" "}
                    <span className="text-primary">@ {exp.company}</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                    >
                      <span className="text-primary mt-1.5">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
