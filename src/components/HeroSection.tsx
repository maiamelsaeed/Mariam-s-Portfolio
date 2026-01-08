import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  Code2,
  Sparkles,
} from "lucide-react";
import { useState, useEffect } from "react";

const roles = [
  "Full Stack Developer",
  "Problem Solver",
  "Tech Enthusiast",
  "Lifelong Learner",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  };

  const name = "Mariam Alsaeed.";

  return (
    <section className="min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-20 md:pt-32">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-primary code-font text-sm">
            Available for work
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-primary code-font text-sm md:text-base mb-4"
        >
          Hi, my name is
        </motion.p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 overflow-hidden">
          {name.split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className={letter === " " ? "inline" : "inline-block"}
              whileHover={{
                scale: 1.2,
                color: "hsl(var(--primary))",
                transition: { duration: 0.1 },
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6"
        >
          Passionate Full Stack Developer.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mb-8 leading-relaxed"
        >
          <p>
            I'm a{" "}
            <span className="text-primary code-font font-medium">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-0.5 h-5 bg-primary ml-1 align-middle"
              />
            </span>{" "}
            specializing in building exceptional digital experiences. Currently
            focused on creating scalable, user-focused applications with{" "}
            <motion.span
              className="text-primary cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              React
            </motion.span>
            ,{" "}
            <motion.span
              className="text-primary cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Node.js
            </motion.span>
            , and{" "}
            <motion.span
              className="text-primary cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              TypeScript
            </motion.span>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%", skewX: -15 }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative">View My Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform relative" />
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-6">
            {[
              {
                icon: Github,
                href: "https://github.com/maiamelsaeed",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/mariam-alsaeed-bb8102268/",
                label: "LinkedIn",
              },
              {
                icon: Code2,
                href: "https://leetcode.com/u/mar_yumm1/",
                label: "LeetCode",
              },
              {
                icon: Mail,
                href: "mailto:mariam.elgalady1@gmail.com",
                label: "Email",
              },
              {
                icon: Phone,
                href: "tel:+201065032665",
                label: "Phone",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={
                  social.label !== "Email" && social.label !== "Phone"
                    ? "_blank"
                    : undefined
                }
                rel={
                  social.label !== "Email" && social.label !== "Phone"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-2"
                aria-label={social.label}
                whileHover={{ scale: 1.3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {social.label === "Phone" ? (
                  <>
                    <social.icon className="w-6 h-6" />
                    <span className="code-font">(+20)1065032665</span>
                  </>
                ) : (
                  <social.icon className="w-6 h-6" />
                )}
              </motion.a>
            ))}
            <motion.div
              className="h-px w-24 bg-muted-foreground/30"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { duration: 1.5, repeat: Infinity },
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
