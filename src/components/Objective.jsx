import { motion } from 'framer-motion';

function Objective() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Objective</h2>
      <p>
        Final-year Computer Science student with hands-on experience in backend development, distributed systems, and cloud-native applications. Seeking a Software Engineer role to contribute to scalable, performant, and secure database services using engineering best practices.
      </p>
    </motion.section>
  );
}

export default Objective;