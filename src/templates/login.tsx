import { useContext } from "react";

import styles from "../styles/pages/Login.module.css";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { isLogged, loginGitHub } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <img src="/img/logo-background.svg" alt="" />
      </div>
      <div className={styles.rightSide}>
        <img src="/img/logo.svg" alt="" />
        <div>
          <strong className={styles.title}>Bem-vindo</strong>

          <div onClick={loginGitHub}>
            <img src="/img/github.svg" alt="" />
            <p>Faça login com o Github para começar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
