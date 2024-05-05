import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";

export const NewOrder = () => {
    return (
        <div className="new_order">
            <p className="title_new_order">
                Click on New Order to create a new order!
            </p>
            {/*<Image className="logo_new_order" src={logo} alt="Logo"  /> */}
            <button className="btn_new_order">
                <Link href="/dish">New Order</Link>
            </button>
        </div>
    );
};
