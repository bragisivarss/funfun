"use client";
import React, {
    createContext,
    useState,
    useContext,
    Dispatch,
    SetStateAction,
} from "react";
import { Meal, Drink } from "../types/ContextType";

export type Data = {
    selectedMeal: Meal[] | undefined;
    setSelectedMeal: Dispatch<SetStateAction<Meal[]>> | undefined;
};

{
    /*
    tempSelectedMeal: Meal[] | undefined;
    setTempSelectedMeal: Dispatch<SetStateAction<Meal[]>> | undefined;
    selectedDrinks: Drink[] | undefined;
    setSelectedDrinks: Dispatch<SetStateAction<Drink[]>> | undefined;
    tempSelectedDrinks: Drink[] | undefined;
    setTempSelectedDrinks: Dispatch<SetStateAction<Drink[]>> | undefined;
    selectedDateTime: any | undefined;
    setSelectedDateTime: Dispatch<SetStateAction<any>> | undefined;
    people: number | undefined;
    setPeople: Dispatch<SetStateAction<any[]>> | undefined;
    email: string | undefined;
    setEmail: Dispatch<SetStateAction<any>> | undefined;

        people,
        setPeople,
        email,
        setEmail,
        tempSelectedMeal,
        setTempSelectedMeal,
        selectedDrinks,
        setSelectedDrinks,
        tempSelectedDrinks,
        setTempSelectedDrinks,
        selectedDateTime,
        setSelectedDateTime,
*/
}

export const DataContext = createContext<Data>({
    selectedMeal: [],
    setSelectedMeal: () => {},
});

export const DataProvider = ({ children }: any) => {
    const [selectedMeal, setSelectedMeal] = useState<Meal[]>();
    const [tempSelectedMeal, setTempSelectedMeal] = useState<Meal[]>();
    const [selectedDrinks, setSelectedDrinks] = useState<Drink[]>();
    const [tempSelectedDrinks, setTempSelectedDrinks] = useState<Drink[]>();
    const [selectedDateTime, setSelectedDateTime] = useState<Date>();
    const [people, setPeople] = useState<number>(0);
    const [email, setEmail] = useState<string>();

    const value = {
        selectedMeal,
        setSelectedMeal,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
