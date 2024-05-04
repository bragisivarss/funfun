"use client";

import { usePathname } from "next/navigation";
import logo from "/public/logo.png"
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
    const path = usePathname();

    return (
        <div className="header">
            <div className="header-image">
                <Link href="/" className="image-link"><Image src={logo} alt="logo" height={80} width={85} /></Link>
            </div>
            <div className="header-link">
                <Link href="/dish" className={`link ${path === '/dish' ? 'active header-a' : 'header-a'}`}>Dish</Link>
            </div>
            <div className="header-link">
                <Link href="/drinks" className={`link ${path === '/drinks' ? 'active header-a' : 'header-a'}`}>Drinks</Link>
            </div>
            <div className="header-link">
                <Link href="/order" className={`link ${path === '/order' ? 'active header-a' : 'header-a'}`}>Order</Link>
            </div>
            <div className="header-link">
                <Link href="/receipt" className={`link ${path === '/receipt' ? 'active header-a' : 'header-a'}`}>Receipt</Link>
            </div>
        </div>
    );
};

