import { motion } from 'framer-motion';

function Skills() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2>Technical Skills</h2>
      <ul>
        <li><strong>Programming Languages and Concepts:</strong> Python, DSA, OOPS</li>
        <li><strong>Frameworks & Libraries:</strong> Node.js, Express.js</li>
        <li><strong>Distributed Systems:</strong> Docker, Kubernetes, WebSockets</li>
        <li><strong>Cloud Platforms:</strong> AWS (basic), Kaggle, Colab, MongoDB Atlas</li>
        <li><strong>Database Management:</strong> SQL, MySQL, MongoDB (Atlas)</li>
      </ul>
    </motion.section>
  );
}

export default Skills;