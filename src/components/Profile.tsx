import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.container}>
      <img
        src="https://github.com/valdenirtrevisan.png"
        alt="Valdenir Trevisan"
      />
      <div>
        <strong>Valdenir Trevisan</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
