import { useContext } from "react";
import { MeterContext } from "../contexts/meterContext";

export function useMeter() {
  return useContext(MeterContext);
}
