import styles from "./Header.module.css";

import Logo from "../../public/ignite-logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="ícone da aplicação" />
      <h1>Ignite Feed</h1>
    </header>
  )
}