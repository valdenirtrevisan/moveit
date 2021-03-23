import styles from "../styles/pages/Dashboard.module.css";
import { ExperienceBar } from "../components/ExperienceBar";
import { CountdownProvider } from "../contexts/CountdownContext";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdonw } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdonw />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}
