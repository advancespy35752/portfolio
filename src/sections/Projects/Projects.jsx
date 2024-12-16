import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import startup from '../../assets/startup.webp';
import translation from '../../assets/translation.jpg';
import sentiment from '../../assets/sentiment.svg';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={translation}
          link="https://github.com/advancespy35752/Transformer_LLM"
          h3="Language Translation Model"
          p="using Transformers"
        />
        <ProjectCard
          src={startup}
          link="https://drive.google.com/file/d/1JgdITWBZg_wHd5xKCF5N-7V9g4aAlZed/view"
          h3="Exploring Startup Culture of India"
          p="applied mathematics"
        />
        <ProjectCard
          src={sentiment}
          link="https://drive.google.com/file/d/1HykqH-817AgK_hyr1miIuounczXFTgym/view"
          h3="Twitter Sentiment Analysis for Lok Sabha Elections"
          p="machine learning"
        />
      </div>
    </section>
  );
}

export default Projects;
