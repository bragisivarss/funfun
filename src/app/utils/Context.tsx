"use client";
import React, {
    createContext,
    useState,
    useContext,
    Dispatch,
    SetStateAction,
} from "react";

// Define the Stuff type
export type Stuff = {
    selectedMeal: any[];
    setSelectedMeal: Dispatch<SetStateAction<any[]>>;
    selectedDrinks: any[];
    setSelectedDrinks: Dispatch<SetStateAction<any[]>>;
    selectedDateTime: any;
    setSelectedDateTime: Dispatch<SetStateAction<any>>;
    tempSelectedMeal: any[];
    setTempSelectedMeal: Dispatch<SetStateAction<any[]>>;
    tempSelectedDrinks: any[];
    setTempSelectedDrinks: Dispatch<SetStateAction<any[]>>;
    tempSelectedDateTime: any;
    setTempSelectedDateTime: Dispatch<SetStateAction<any>>;
};

// Create the DataContext
export const DataContext = createContext<Stuff | undefined>(undefined);

// Create the DataProvider
export const DataProvider = ({ children }: any) => {
    const [selectedMeal, setSelectedMeal] = useState<any[]>([]);
    const [selectedDrinks, setSelectedDrinks] = useState<any[]>([]);
    const [selectedDateTime, setSelectedDateTime] = useState<Date>();
    const [tempSelectedMeal, setTempSelectedMeal] = useState<any[]>([]);
    const [tempSelectedDrinks, setTempSelectedDrinks] = useState<any[]>([]);
    const [tempSelectedDateTime, setTempSelectedDateTime] = useState<Date>();

    const value = {
        selectedMeal,
        setSelectedMeal,
        selectedDrinks,
        setSelectedDrinks,
        selectedDateTime,
        setSelectedDateTime,
        tempSelectedMeal,
        setTempSelectedMeal,
        tempSelectedDrinks,
        setTempSelectedDrinks,
        tempSelectedDateTime,
        setTempSelectedDateTime,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
