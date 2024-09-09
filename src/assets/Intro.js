import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";

export const IntroContext = createContext();

export function Intro() {
  const [category, setCategory] = useState(0);

  return (
    <>
      <IntroContext.Provider value={{ category, setCategory }}>
        <Outlet />
      </IntroContext.Provider>
    </>
  );
}
