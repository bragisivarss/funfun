import { useData } from "../utils/Context";

export const DrinksMap = () => {
    const { selectedDrinks } = useData();

    const filteredDrinks = selectedDrinks.filter(
        (selectedDrinks) => selectedDrinks.amount > 0
    );

    return (
        <div className="drinks">
            <p className="title_ordered_drinks">Ordered Drinks</p>
                <div className="receipt_drink_container">
                    {filteredDrinks.map((drink) => {
                        return (
                            <div
                                className="single_drink_order"
                                key={drink.idDrink}
                            >
                                <p className="drink_name_order">
                                    {drink.strDrink}{" "}
                                    <span className="block underline">
                                        Amount: {drink.amount}
                                    </span>
                                </p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
