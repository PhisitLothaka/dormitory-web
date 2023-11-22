import { useState } from "react";
import { createContext } from "react";
// import { useState } from "react";

export const MeterContext = createContext();
export default function MeterContextProvider({ children }) {
  const [input, setInput] = useState({
    priceUnit: "",
    unit: "",
    createAt: "",
    roomId: "",
  });

  return (
    <MeterContext.Provider value={{ setInput, input }}>
      {children}
    </MeterContext.Provider>
  );
}
