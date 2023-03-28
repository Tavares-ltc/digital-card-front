"use client"
import styles from '../page.module.css'

export default function Button({ children, onClick }: { onClick?: Function, children: React.ReactNode }) {
  return <button onClick={()=> onClick}  className={styles.button}>{children}</button>;
}
