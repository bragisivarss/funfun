import { useData } from "../utils/Context"

export const Totals = () => {
    const {orderPrice} = useData();

    return <div className="total_price">
        <p>Price: {orderPrice}</p>
    </div>
}
