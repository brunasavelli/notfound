import Link from "next/link";
import styles from "./notfound.module.css"; 

export default function NotFound() {
    return (
        <div className={styles.container}>
            <img src="/img/loadind.gif" width={100} height={100} priority className={styles.image} />
            <h1>404 - PÁGINA NÃO ENCONTRADA</h1>
            <p>A página que você procura não existe.</p>

            <div>
                <Link href="/">Voltar para a página inicial</Link>
            </div>
        </div>
    )
}