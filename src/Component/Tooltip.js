import React from "react";
import Tooltip from "@mui/material/Tooltip";
import useStore from "./store";
import { addMinutes, format } from "date-fns";

export default function ValueLabelComponent(props) {
  const { children, value } = props;
  const granularity = useStore((state) => state.granularity);
  const currentDate = new Date("2022-03-14 05:59:00");
  let newValue = value;
  if (value > 720) {
    newValue = value - 720;
  }
  if (value > 1440) {
    newValue = value - 1440;
  }
  const currentDatePlusTime = addMinutes(
    currentDate,
    typeof granularity === "string" || granularity instanceof String
      ? newValue * 1
      : newValue * granularity
  );
  console.log(
    "🚀 ~ file: Tooltip.js ~ line 11 ~ ValueLabelComponent ~ value",
    newValue
  );

  console.log(
    "🚀 ~ file: Tooltip.js ~ line 33 ~ ValueLabelComponent ~ currentDatePlusTime",
    currentDatePlusTime
  );
  return (
    <Tooltip
      enterTouchDelay={0}
      placement="top"
      title={format(currentDatePlusTime, "HH:mm")}
    >
      {children}
    </Tooltip>
  );
}
