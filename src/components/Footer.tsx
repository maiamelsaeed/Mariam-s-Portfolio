import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-sm code-font"
        >
          Designed & Built by{" "}
          <a href="#" className="text-primary hover:underline">
            Mariam Alsaeed
          </a>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground/60 text-xs mt-2"
        >
          © {new Date().getFullYear()} All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
