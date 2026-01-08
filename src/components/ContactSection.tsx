import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Send, Rocket, Phone, Code2 } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:bg-gray-800" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Code2, href: "https://leetcode.com/yourusername", label: "LeetCode", color: "hover:bg-orange-500" },
    { icon: Phone, href: "tel:+1234567890", label: "Phone", color: "hover:bg-green-600" },
    { icon: Send, href: "mailto:mariam@example.com", label: "Email", color: "hover:bg-primary" },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1, rotate: [0, 10, -10, 0] } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Rocket className="w-10 h-10 text-primary" />
          </motion.div>

          <p className="text-primary code-font text-sm mb-4">06. What's Next?</p>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Let's Work{" "}
            <motion.span 
              className="gradient-text inline-block"
              animate={{ 
                rotate: [0, 2, -2, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Together
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground text-lg leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            I'm currently open to new opportunities and would love to hear from you. 
            Whether you have a question, a project idea, or just want to say hi, 
            feel free to reach out!
          </motion.p>

          <motion.a
            href="mailto:mariam@example.com"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px hsl(var(--primary) / 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-primary text-primary-foreground font-semibold text-lg overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%", skewX: -15 }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <Mail className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Say Hello</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              👋
            </motion.span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                className={`p-4 rounded-full border border-border text-muted-foreground hover:text-white hover:border-transparent transition-all duration-300 ${social.color}`}
                aria-label={social.label}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Fun animated dots */}
          <motion.div 
            className="mt-16 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ 
                  y: [-5, 5, -5],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ 
                  duration: 1,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
