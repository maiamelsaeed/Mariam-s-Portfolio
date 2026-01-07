import { motion } from "framer-motion";

const FloatingElements = () => {
  const shapes = [
    { size: 60, x: "10%", y: "20%", delay: 0, duration: 8 },
    { size: 40, x: "85%", y: "15%", delay: 1, duration: 10 },
    { size: 80, x: "75%", y: "70%", delay: 2, duration: 12 },
    { size: 30, x: "15%", y: "75%", delay: 0.5, duration: 9 },
    { size: 50, x: "50%", y: "85%", delay: 1.5, duration: 11 },
    { size: 25, x: "90%", y: "45%", delay: 3, duration: 7 },
  ];

  const codeSnippets = [
    { text: "</>", x: "8%", y: "35%" },
    { text: "{ }", x: "92%", y: "25%" },
    { text: "=>", x: "5%", y: "60%" },
    { text: "[]", x: "88%", y: "80%" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full border border-primary/20"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating code symbols */}
      {codeSnippets.map((snippet, index) => (
        <motion.span
          key={`code-${index}`}
          className="absolute text-primary/10 code-font text-2xl md:text-3xl font-bold select-none"
          style={{
            left: snippet.x,
            top: snippet.y,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6 + index * 0.5,
            delay: index * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {snippet.text}
        </motion.span>
      ))}

      {/* Gradient orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(174 72% 56% / 0.15) 0%, transparent 70%)",
          left: "-10%",
          top: "10%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(199 89% 48% / 0.2) 0%, transparent 70%)",
          right: "-5%",
          bottom: "20%",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingElements;