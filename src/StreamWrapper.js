import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";

export const StreamContext = createContext();

export function StreamWrapper() {
  const [category, setCategory] = useState(0);
  return (
    <>
      <StreamContext.Provider value={{ category, setCategory }}>
        <Outlet />
      </StreamContext.Provider>
    </>
  );
}
