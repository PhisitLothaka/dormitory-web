import SummarizeList from "../components/SummarizeList";
import { useState, useEffect } from "react";
import { useMeter } from "../hooks/use-meter";

export default function Summarize() {
  const [date, setDate] = useState();
  const { summarize, getSummarize, createSummarize } = useMeter();
  console.log("🚀 ~ file: Summarize.jsx:9 ~ Summarize ~ summarize:", summarize);

  useEffect(() => {
    getSummarize(date);
  }, [date]);

  return (
    <div className="flex flex-col gap-2 px-4">
      <div>
        <input
          type="date"
          onChange={async (e) => {
            setDate(() => e.target.value);
          }}
        />
      </div>
      <form>
        <div>
          <SummarizeList summarizeObj={summarize} />
        </div>
        {summarize.length ? (
          <div className="flex justify-end">
            <button
              className="bg-[--success-color] text-white px-2 py-1.5 rounded-md "
              onClick={() => {
                createSummarize(summarize);
              }}
            >
              confirm
            </button>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
