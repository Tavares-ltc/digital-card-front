import styles from '../page.module.css'

export default function Footer({ children } : {children : React.ReactNode}) {
  return (
    <div className={styles.footerWrappler}>
      { children }
    </div>
  );
}
