import { useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
export const MeterContext = createContext();
export default function MeterContextProvider({ children }) {
  const [meter, setMeter] = useState([]);
  const [monthOrder, setMonthOrder] = useState([]);
  const [summarize, setSummarize] = useState([]);
  const [summarizeInMonth, setSummarizeInMonth] = useState([]);
  const [userBill, setUserBill] = useState([]);

  const getMeterWater = async (date) => {
    try {
      const res = await axios.get(`/meter/water/${date}`);
      setMeter(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMeterElectric = async (date) => {
    try {
      const res = await axios.get(`/meter/electric/${date}`);
      setMeter(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSummarize = async (date) => {
    try {
      const res = await axios.get(`/summarize/${date}`);
      setSummarize(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const createSummarize = async (data) => {
    try {
      console.log(data);
      const res = await axios.post(`/summarize`, { data });
      const { count } = res;
      if (count) {
        setSummarize([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getMonthOrder = async () => {
    try {
      const res = await axios.get("/summarize/order");
      console.log("🚀 ~ getMonthOrder ~ res:", res);

      const month = res.data.map((el) => {
        let date = el.timeReceipt;
        let myDate = new Date(date);
        let month = myDate.getMonth() + 1;
        return { month };
      });
      setMonthOrder(month);
    } catch (err) {
      console.log(err);
    }
  };

  const getSummarizeInMonth = async (month) => {
    try {
      const res = await axios.get(`/summarize/order/${month}`, month);

      setSummarizeInMonth(res.data.sumarizeInMonth);
    } catch (err) {
      console.log(err);
    }
  };

  const editStatusPaymant = async (checkPayment, id, month) => {
    try {
      await axios.patch(`/summarize/order`, { checkPayment, id });
      getSummarizeInMonth(month);
    } catch (err) {
      console.log(err);
    }
  };

  const getBillUser = async () => {
    try {
      const res = await axios.get("/user");
      setUserBill(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MeterContext.Provider
      value={{
        userBill,
        getBillUser,
        editStatusPaymant,
        setSummarizeInMonth,
        summarizeInMonth,
        getSummarizeInMonth,
        monthOrder,
        getMonthOrder,
        summarize,
        getSummarize,
        createSummarize,
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
