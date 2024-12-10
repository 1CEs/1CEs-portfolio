import React, { createContext, useState } from "react";

export interface IOptionContext {
    option: "myself" | "skills & tools" | "education" | "contact"
    setOption: React.Dispatch<React.SetStateAction<IOptionContext["option"]>>
}

export const OptionContext = createContext<IOptionContext | undefined>(undefined)

export const OptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [option, setOption] = useState<IOptionContext["option"]>("myself");

    return (
        <OptionContext.Provider value={{ option, setOption }}>
            {children}
        </OptionContext.Provider>
    );
};