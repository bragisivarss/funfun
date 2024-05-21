export type Provision = {
    id: string;
    name: string;
    category: string;
    price?: number;
};

export type Dish = Provision & {
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
}

export type Drink = Provision & {
    glass: string;
    amount: number;
    strDrinkThumb: string;
};

export type Order = {
    id: number;
    email: string;
    dish: Dish;
    drinks: Drink[];
    people: number;
    date: Date;
};

