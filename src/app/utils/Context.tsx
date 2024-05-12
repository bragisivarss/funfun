"use client";
import React, {
    createContext,
    useState,
    useContext,
    Dispatch,
    SetStateAction,
} from "react";

export type Stuff = {
    selectedMeal: any[];
    setSelectedMeal: Dispatch<SetStateAction<any[]>>;
    tempSelectedMeal: any[];
    setTempSelectedMeal: Dispatch<SetStateAction<any[]>>;
    selectedDrinks: any[];
    setSelectedDrinks: Dispatch<SetStateAction<any[]>>;
    tempSelectedDrinks: any[];
    setTempSelectedDrinks: Dispatch<SetStateAction<any[]>>;
    selectedDateTime: any;
    setSelectedDateTime: Dispatch<SetStateAction<any>>;
    people: any[];
    setPeople: Dispatch<SetStateAction<any[]>>;
    email: any[];
    setEmail: Dispatch<SetStateAction<any>>;
};

export const DataContext = createContext<Stuff | undefined>(undefined);

export const DataProvider = ({ children }: any) => {
    const [selectedMeal, setSelectedMeal] = useState<any[]>([]);
    const [tempSelectedMeal, setTempSelectedMeal] = useState<any[]>([]);
    const [selectedDrinks, setSelectedDrinks] = useState<any[]>([]);
    const [tempSelectedDrinks, setTempSelectedDrinks] = useState<any[]>([]);
    const [selectedDateTime, setSelectedDateTime] = useState<Date>();
    const [people, setPeople] = useState<any[]>([]);
    const [email, setEmail] = useState<any[]>([]);

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
