import styles from "./programmeLevel.module.css";
import Frame from "./Frame.svg";
import { allYears } from "../../mock-data";
import { useNavigate } from "react-router-dom";

const ProgrammeLevels = () => {
  const navigate = useNavigate();

  const handleGoToLevel = (value: string) => {
    navigate(`/levels/${value}`);
  };

  return (
    <section>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">OUR LEVELS</a>
        </div>
      </nav>

      <div className={styles.menu}>
        {allYears.map(({ name, value }, index: number) => (
          <div
            className={styles.year}
            key={`${index}-${value}`}
            onClick={() => handleGoToLevel(value)}
          >
            <img src={Frame} alt="Frame" />
            <div>{name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgrammeLevels;
