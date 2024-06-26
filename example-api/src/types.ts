export type Dish = {
    idMeal: string;
    strMeal: string;
    strArea: string;
    strMealThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strIngredient16: string;
    strIngredient17: string;
    strIngredient18: string;
    strIngredient19: string;
    strIngredient20: string;
    price?: number;
}

export type Drink = {
    idDrink: string;
    strDrink: string;
    strGlass: string;
    strDrinkThumb: string;
    price?: number;
    amount: number;
};

export type Order = {
    id: number;
    email: string;
    dish: Dish;
    drinks: Drink[];
    people: number;
    date: Date;
    price: number;
};

