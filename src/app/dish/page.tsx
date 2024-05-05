import { MealSelect } from "../components/SelectMeal";
import { SelectDrinksContainer as Drinks } from "../components/ButtonToDrinks";

const Dish = () => {
    return (
        <>
            <div className="container">
            <div className="dish_one">
                <MealSelect />
            </div>
            <div className="dish_two">
                <Drinks />
            </div>
        </div>
        </>
    );
};
export default Dish;
