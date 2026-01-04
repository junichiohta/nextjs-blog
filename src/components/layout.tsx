import Image from "next/image";
import styles from "./layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/images/profile.jpg"
          alt="Profile"
          width={50}
          height={50}
          className={styles.profileImage}
        />
        <h2>共通ヘッダー</h2>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>© 2026 Next.js Blog</p>
      </footer>
    </div>
  );
}
