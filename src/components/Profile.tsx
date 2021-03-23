import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { userData, logout } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <img src={userData.photo} alt={userData.name} onClick={logout} />
      <div>
        <strong>{userData.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
