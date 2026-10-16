import { motion, useReducedMotion } from "framer-motion";

/**
 * Bloc animé réutilisable : entrée douce fade + y.
 * Respecte prefers-reduced-motion (simple fondu, sans déplacement).
 */
function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.5,
  className = "",
  as = "div",
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;