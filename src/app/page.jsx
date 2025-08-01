import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Link href="/sobre">
        <h1>Sobre nós</h1>
      </Link>
      <br/>
      <a
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google
      </a>
    </div>
  );
}

