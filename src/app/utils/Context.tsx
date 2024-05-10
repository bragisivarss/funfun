"use client";
import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

// Define the Stuff type
export type Stuff = {
    selectedMeal: string[];
    setSelectedMeal: Dispatch<SetStateAction<string[]>>;
    selectedDrinks: string[];
    setSelectedDrinks: Dispatch<SetStateAction<string[]>>;
    selectedDateTime: any;
    setSelectedDateTime: Dispatch<SetStateAction<any>>;
    tempSelectedMeal: string[];
    setTempSelectedMeal: Dispatch<SetStateAction<string[]>>;
    tempSelectedDrinks: string[];
    setTempSelectedDrinks: Dispatch<SetStateAction<string[]>>;
    tempSelectedDateTime: any;
    setTempSelectedDateTime: Dispatch<SetStateAction<any>>;
};

// Create the DataContext
export const DataContext = createContext<Stuff | undefined>(undefined);

// Create the DataProvider
export const DataProvider = ({ children }: any) => {
    const [selectedMeal, setSelectedMeal] = useState<string[]>([]);
    const [selectedDrinks, setSelectedDrinks] = useState<string[]>([]);
    const [selectedDateTime, setSelectedDateTime] = useState<Date>();
    const [tempSelectedMeal, setTempSelectedMeal] = useState<string[]>([]);
    const [tempSelectedDrinks, setTempSelectedDrinks] = useState<string[]>([]);
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
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
