import styles from '../page.module.css'

export default function Footer({ children } : {children : React.ReactNode}) {
  return (
    <footer className={styles.footerWrappler}>
      { children }
    </footer>
  );
}
