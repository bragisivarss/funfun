import Image from "next/image";

export const DrinkBtn = (drinks) => {
    <button className="drink_btn">
        <div className="single_drink">
            <Image
                src={drinks[0].strDrinkThumb}
                alt={drinks[0].strDrink}
                width={200}
                height={200}
            />
        </div>
    </button>;
};
