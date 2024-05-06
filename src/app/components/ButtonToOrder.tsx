import Link from "next/link";

export const ButtonToOrder = () => {
    return (
        <div className="continue_container">
            <div className="next_step">
                <p>Selected drinks</p>
                <p>*DRINK NAME*: *AMOUNT*</p>
                <p>Do you want to continue?</p>
            </div>
            <div className="btn_to_drinks_container">
                <button className="btn_to_drinks">
                    <Link href="./order">Continue</Link>
                </button>
            </div>
        </div>
    );
};
