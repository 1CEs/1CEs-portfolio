import React, { createContext, useState } from "react";

export interface ISectionContext {
    section: "Home" | "About" | "Project" | "Resume"
    setSection: React.Dispatch<React.SetStateAction<ISectionContext["section"]>>
}

export const SectionContext = createContext<ISectionContext | undefined>(undefined)

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [section, setSection] = useState<ISectionContext["section"]>("Home");

    return (
        <SectionContext.Provider value={{ section, setSection }}>
            {children}
        </SectionContext.Provider>
    );
};