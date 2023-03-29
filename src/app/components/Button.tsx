"use client"
import styles from '../page.module.css'

export default function Button({ children, onClick, type }: { onClick?: Function, children: React.ReactNode, type?: "button" | "submit" | "reset" | undefined
}) {
  return <button type={type} onClick={()=> onClick}  className={styles.button}>{children}</button>;
}
