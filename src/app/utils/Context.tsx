"use client";
import React, {
    createContext,
    useState,
    useContext,
    Dispatch,
    SetStateAction,
    PropsWithChildren,
} from "react";
import { Meal, Drink } from "../types/ContextType";

export type Data = {
    selectedMeal: Meal[];
    setSelectedMeal: Dispatch<SetStateAction<Meal[]>>;
    tempSelectedMeal: Meal[];
    setTempSelectedMeal: Dispatch<SetStateAction<Meal[]>>;
    selectedDrinks: Drink[];
    setSelectedDrinks: Dispatch<SetStateAction<Drink[]>>;
    tempSelectedDrinks: Drink[];
    setTempSelectedDrinks: Dispatch<SetStateAction<Drink[]>>;
    selectedDateTime: any;
    setSelectedDateTime: Dispatch<SetStateAction<any>>;
    people: number;
    setPeople: Dispatch<SetStateAction<number>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
};

export const DataContext = createContext<Data | undefined>(undefined);

export const DataProvider: React.FC = ({ children}: PropsWithChildren) => {
    const [selectedMeal, setSelectedMeal] = useState<Meal[]>([]);
    const [tempSelectedMeal, setTempSelectedMeal] = useState<Meal[]>([]);
    const [selectedDrinks, setSelectedDrinks] = useState<Drink[]>([]);
    const [tempSelectedDrinks, setTempSelectedDrinks] = useState<Drink[]>([]);
    const [selectedDateTime, setSelectedDateTime] = useState<Date>();
    const [people, setPeople] = useState<number>(0);
    const [email, setEmail] = useState<string>("");

    const value = {
        people,
        setPeople,
        email,
        setEmail,
        selectedMeal,
        setSelectedMeal,
        tempSelectedMeal,
        setTempSelectedMeal,
        selectedDrinks,
        setSelectedDrinks,
        tempSelectedDrinks,
        setTempSelectedDrinks,
        selectedDateTime,
        setSelectedDateTime,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
