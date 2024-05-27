"use client";
import { OrderRouteWithSaveButton } from "../utils/router";
import { useData } from "../utils/Context";

export const ButtonToOrder = () => {
    const { tempSelectedDrinks,  } = useData();

    const filteredDrinks = tempSelectedDrinks.filter(
        (selectedDrinks) => selectedDrinks.amount > 0
    );

    return (
        <div className="continue_container">
            <div className="next_step">
                <p className="selected_drinks_title">Selected drinks</p>
                <>
                    {filteredDrinks.map((drink) => {
                        return <p className="selected_drinks" key={drink.strDrink}>{drink.strDrink}: {drink.amount}</p>
                    })}
                </>
                <p className="drinks_continue">Do you want to continue?</p>
            </div>
            <div className="btn_to_drinks_container">
                <OrderRouteWithSaveButton />
            </div>
        </div>
    );
};
