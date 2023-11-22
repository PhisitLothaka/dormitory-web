import { useContext } from "react";
import { MeterContext } from "../contexts/MeterContext";

export function useMeter() {
  return useContext(MeterContext);
}
