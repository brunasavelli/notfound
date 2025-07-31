import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href="/sobre">
        Sobre nós
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

