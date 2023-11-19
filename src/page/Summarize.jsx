import SummarizeList from "../components/SummarizeList";
import axios from "../config/axios";
import { useState, useEffect } from "react";

export default function Summarize() {
  const [summarizeObj, setSummarizeObj] = useState([]);

  useEffect(() => {
    axios.get("/summarize").then((res) => {
      setSummarizeObj(res.data.summarize);
    });
  }, []);
  return (
    <div className="px-4">
      <SummarizeList summarizeObj={summarizeObj} />
    </div>
  );
}
