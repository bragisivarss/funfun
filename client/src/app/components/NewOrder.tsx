import { DishRouteButton } from "../utils/router";

export const NewOrder = () => {
    return (
        <div className="new_order">
            <p className="title_new_order">
                Click on New Order to create a new order!
            </p>
            <DishRouteButton />
        </div>
    );
};
