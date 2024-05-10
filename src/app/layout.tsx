import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/css/globals.css";
import { Header } from "./components/Header";
import { DataProvider } from "@/app/utils/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Lil Bits",
    description: "Lil Bits restaurant",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <DataProvider>
                {children}
                </DataProvider>
            </body>
        </html>
    );
}
