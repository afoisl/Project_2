import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";

export const MyPageContext = createContext();

export function MyPage() {
  const [category, setCategory] = useState(0);

  return (
    <>
      <MyPageContext.Provider value={{ category, setCategory }}>
        <Outlet />
      </MyPageContext.Provider>
    </>
  );
}
