import { useData } from "../utils/Context";

export const DrinksMap = () => {
    const { selectedDrinks } = useData();

    const filteredDrinks = selectedDrinks.filter(selectedDrinks => selectedDrinks.amount > 0);

    return (
        <div className="drinks">
            {filteredDrinks.map((drink) => {
                return (
                    <div className="single_drink_map" key={drink.idDrink}>
                        <p>Drink: {drink.strDrink}</p>
                        <p>Drink Amount: {drink.amount}</p>
                    </div>
                );
            })}
        </div>
    );
};
