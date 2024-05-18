import { OrderRouteWithSaveButton } from "../utils/router";

export const ButtonToOrder = () => {

    return (
        <div className="continue_container">
            <div className="next_step">
                <p>Selected drinks</p>
                <p>
                </p>
                <p>Do you want to continue?</p>
            </div>
            <div className="btn_to_drinks_container">
                <OrderRouteWithSaveButton />
            </div>
        </div>
    );
};
