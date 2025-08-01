import localFont from "next/font/local";
import "./globals.css";

// Configurar fonte local baixada
const roboto = localFont({
    src: [
        {
            path: "../../public/fonts/Roboto-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Roboto-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-roboto",
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={roboto.variable}>
            <body className={roboto.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}