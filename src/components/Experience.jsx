import { motion } from 'framer-motion';

function Experience() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h2>Experience</h2>
      <div style={{ marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Campus Champs Internship</h3>
        <p>Dec 10, 2024 – Dec 18, 2024</p>
        <ul>
          <li>Containerized ML workflows using Docker and deployed on cloud platforms.</li>
          <li>Strengthened problem-solving skills by working on real-world coding and technical challenges.</li>
        </ul>
      </div>
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Phyllo Operations Intern</h3>
        <p>May 21, 2025 – July 1, 2025</p>
        <ul>
          <li>Benchmarked AI-generated content using Google AI Studio.</li>
          <li>Built data pipelines for evaluating model outputs and maintaining data quality.</li>
          <li>Analyzed platform data to improve reliability and consistency.</li>
        </ul>
      </div>
    </motion.section>
  );
}

export default Experience;