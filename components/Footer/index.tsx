import styles from './styles.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.line}>
          <img src="/images/line.svg" alt="Logo" />
        </div>

        <div className={styles.logo}>
          <img src="/images/darklogo.svg" alt="Logo" />
        </div>
      </div>
    </div>
  )
}

export default Footer