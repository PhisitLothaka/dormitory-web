import { useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
export const MeterContext = createContext();
export default function MeterContextProvider({ children }) {
  const [meter, setMeter] = useState([]);
  console.log(
    "🚀 ~ file: MeterContext.jsx:7 ~ MeterContextProvider ~ meter:",
    meter
  );
  const [input, setInput] = useState({
    priceUnit: 0,
    unit: 0,
    createAt: 0,
    roomId: 0,
  });

  const getMeterWater = async (date) => {
    try {
      const res = await axios(`/meter/water/${date}`);
      setMeter(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMeterElectric = async (date) => {
    try {
      const res = await axios(`/meter/electric/${date}`);
      setMeter(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MeterContext.Provider
      value={{
        setInput,
        input,
        meter,
        getMeterWater,
        getMeterElectric,
        setMeter,
      }}
    >
      {children}
    </MeterContext.Provider>
  );
}
