import Link from "next/link";

export const NewOrder = () => {
    return (
        <div className="new_order">
            <p className="title_new_order">
                Click on New Order to create a new order!
            </p>
            <button className="btn_new_order">
                <Link href="/dish">New Order</Link>
            </button>
        </div>
    );
};
