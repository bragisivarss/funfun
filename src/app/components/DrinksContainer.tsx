"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useData } from "../utils/Context";

type Drink = {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
};

export const SelectDrinks = () => {
    const [drinks, setDrinks] = useState<Drink[]>();

    const fetchDrinks = useCallback(async () => {
        try {
            const { data } = await axios.get(
                "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer"
            );
            setDrinks(data.drinks);
        } catch (err) {}
    }, []);

    useEffect(() => {
        fetchDrinks();
    }, [fetchDrinks]);

    if (!drinks) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="drinks_wrapper">
                <div className="drinks_container"></div>
                <button className="single_drink">
                    <div>
                        <Image
                            className="drink_image"
                            src={drinks[0].strDrinkThumb}
                            alt={drinks[0].strDrink}
                            width={190}
                            height={200}
                        />
                    </div>
                </button>
                <button className="single_drink">
                    <div>
                        <Image
                            className="drink_image"
                            src={drinks[1].strDrinkThumb}
                            alt={drinks[1].strDrink}
                            width={190}
                            height={200}
                        />
                    </div>
                </button>
                <button className="single_drink">
                    <div>
                        <Image
                            className="drink_image"
                            src={drinks[2].strDrinkThumb}
                            alt={drinks[2].strDrink}
                            width={190}
                            height={200}
                        />
                    </div>
                </button>
                <button className="single_drink">
                    <div>
                        <Image
                            className="drink_image"
                            src={drinks[3].strDrinkThumb}
                            alt={drinks[3].strDrink}
                            width={190}
                            height={200}
                        />
                    </div>
                </button>
                <button className="single_drink">
                    <div>
                        <Image
                            className="drink_image"
                            src={drinks[4].strDrinkThumb}
                            alt={drinks[4].strDrink}
                            width={190}
                            height={200}
                        />
                    </div>
                </button>
                <button className="single_drink">
                    <div>
                        <Image
                            className="drink_image"
                            src={drinks[5].strDrinkThumb}
                            alt={drinks[5].strDrink}
                            width={190}
                            height={200}
                        />
                    </div>
                </button>
                <button className="single_drink">
                    <div>
                        <Image
                            className="drink_image"
                            src={drinks[6].strDrinkThumb}
                            alt={drinks[6].strDrink}
                            width={190}
                            height={200}
                        />
                    </div>
                </button>
                <button className="single_drink">
                    <div>
                        <Image
                            className="drink_image"
                            src={drinks[7].strDrinkThumb}
                            alt={drinks[7].strDrink}
                            width={190}
                            height={200}
                        />
                    </div>
                </button>
                <button className="single_drink">
                    <div>
                        <Image
                            className="drink_image"
                            src={drinks[8].strDrinkThumb}
                            alt={drinks[8].strDrink}
                            width={190}
                            height={200}
                        />
                    </div>
                </button>
                <button className="single_drink">
                    <div>
                        <Image
                            className="drink_image"
                            src={drinks[9].strDrinkThumb}
                            alt={drinks[9].strDrink}
                            width={190}
                            height={200}
                        />
                    </div>
                </button>
            </div>
        </>
    );
};
