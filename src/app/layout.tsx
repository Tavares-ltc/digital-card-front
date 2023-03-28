import "./globals.css";
import styles from "./page.module.css";

export const metadata = {
  title: "Digital Business Card",
  description: "An simple way to create your business card",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.contentWrappler}>
        {children}
      </div>
    </>
  );
}
