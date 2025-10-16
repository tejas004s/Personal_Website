import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2>Projects</h2>
      <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
        <h3>Garbage Management System</h3>
        <p><strong>Technologies:</strong> React, Express.js, Node.js, MongoDB, Render, .NET Core</p>
        <ul>
          <li>Integrated MongoDB Atlas for efficient data storage and retrieval, improving system performance.</li>
          <li>Key features: Pickup scheduling, real-time status updates via WebSockets, analytics with Chart.js, and JWT-based authentication.</li>
          <li>Developed APIs using .NET Core, deployed on Render for scalability.</li>
        </ul>
        <a href="https://github.com/TEJAS/garbage-management" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </motion.div>
      <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
        <h3>Kiosk System</h3>
        <p><strong>Technologies:</strong> Node.js, Express.js, React.js, MySQL</p>
        <ul>
          <li>Integrated MySQL for optimized data storage and retrieval.</li>
          <li>Built RESTful APIs with Express.js for user authentication, session management, and admin privileges.</li>
          <li>Implemented role-based access for customers and admins, with features like interactive menu browsing, cart management, and admin control over menu and order history.</li>
        </ul>
        <a href="https://github.com/TEJAS/kiosk-system" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </motion.div>
      <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
        <h3>Twitter Sentiment Analysis</h3>
        <p><strong>Technologies:</strong> Python, Pandas, Scikit-learn, NLTK, Kaggle</p>
        <ul>
          <li>Developed a machine learning model to classify Twitter sentiment (positive, negative, neutral) using NLP techniques.</li>
          <li>Preprocessed text data with Pandas and NLTK for tokenization, stop-word removal, and TF-IDF vectorization.</li>
          <li>Trained and evaluated the model on Kaggle, achieving high accuracy with Scikit-learn’s classifiers (e.g., SVM, Random Forest).</li>
          <li>Visualized sentiment trends using Matplotlib and Seaborn, hosted on Kaggle for public access.</li>
        </ul>
        <a href="https://kaggle.com/tejashowda004/twitter-sentiment-analysis" target="_blank" rel="noopener noreferrer">View on Kaggle</a>
      </motion.div>
      <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
        <h3>AI Dungeon Master</h3>
        <p><strong>Technologies:</strong> Python, TensorFlow, Google Colab, Kaggle</p>
        <ul>
          <li>Built an AI-driven storytelling system for dynamic role-playing game narratives, inspired by Dungeons & Dragons.</li>
          <li>Trained a transformer-based text generation model on Google Colab using narrative datasets for coherent outputs.</li>
          <li>Enabled interactive user prompts for story progression, tested and deployed on Kaggle.</li>
          <li>Optimized model for low-latency responses, enhancing real-time user interaction.</li>
        </ul>
        <a href="https://kaggle.com/tejashowda004/ai-dungeon-master" target="_blank" rel="noopener noreferrer">View on Kaggle</a>
      </motion.div>
    </motion.section>
  );
}

export default Projects;