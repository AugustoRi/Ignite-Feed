import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
        alt="imagem de capa"
      />

      <div className={styles.profile}>
        <strong>Augusto Ribeiro</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">Edite seu perfil</a>
      </footer>
    </aside>
  )
}