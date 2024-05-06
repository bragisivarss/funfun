import { ButtonToOrder } from "../components/ButtonToOrder";
import { SelectDrinks } from "../components/DrinksContainer";

const Drinks = () => {
    return (
        <div className="container_two">
            <div className="drink_one">
                <SelectDrinks />
            </div>
            <div className="drink_two">
                <ButtonToOrder />
            </div>
        </div>
    );
};
export default Drinks;
