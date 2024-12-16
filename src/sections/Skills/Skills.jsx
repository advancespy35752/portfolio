import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Data Analysis" />
        <SkillList src={checkMarkIcon} skill="Machine Learning" />
        <SkillList src={checkMarkIcon} skill="Deep Learning" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="GenAI" />
        <SkillList src={checkMarkIcon} skill="AI Regulation" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="LLM" />
        <SkillList src={checkMarkIcon} skill="MS Excel" />
        <SkillList src={checkMarkIcon} skill="Neural Networks" />
      </div>
    </section>
  );
}

export default Skills;
