import { motion } from 'framer-motion';

function Education() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h2>Education</h2>
      <div style={{ marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>University of Visvesvaraya College of Engineering</h3>
        <p>B. Tech in Computer Science and Engineering, CGPA: 8.15 | 2022-2026 | Bengaluru, Karnataka</p>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>WPP PU College</h3>
        <p>12th Grade, Aggregate: 96% | 2020-2022 | Bengaluru, Karnataka</p>
      </div>
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>WPPS</h3>
        <p>10th Grade, Aggregate: 97% | 2019-2020 | Bengaluru, Karnataka</p>
      </div>
    </motion.section>
  );
}

export default Education;