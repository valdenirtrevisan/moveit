import { GetServerSideProps } from "next";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import Dashboard from "../templates/dashboard";
import Login from "../templates/login";
interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const { isLogged } = useContext(AuthContext);

  return (
    <>
      {isLogged ? (
        <ChallengesProvider
          level={props.level}
          currentExperience={props.currentExperience}
          challengesCompleted={props.challengesCompleted}
        >
          <Dashboard />
        </ChallengesProvider>
      ) : (
        <Login />
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
