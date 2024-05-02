import Image from "next/image";

export const Header = () => {
    return (
        <div className="header">
            <div className="header-link">
                <a href="/" className="header-a">Home</a>
            </div>
            <div className="header-link">
                <a href="./dish" className="header-a">Dish</a>
            </div>
            <div className="header-link">
                <a href="./drinks" className="header-a">Drinks</a>
            </div>
            <div className="header-link">
                <a href="./order" className="header-a">Order</a>
            </div>
            <div className="header-link">
                <a href="./receipt" className="header-a">Receipt</a>
            </div>
            <div className="header-image">
            </div>
        </div>
    );
};

