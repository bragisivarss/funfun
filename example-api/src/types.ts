export type Provision = {
    id: string;
    name: string;
    category: string;
    price?: number;
};

export type Dish = Provision & {
    strMealThumb: string;
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
