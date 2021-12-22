import React from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleFilter(props) {
  const { value, setValue, options } = props;

  const handleChange = (event, newValue) => {
    if (newValue) setValue(newValue);
  };

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      unselectable
      onChange={handleChange}
      aria-label="text alignment"
      style={{ background: "white" }}
      color="primary"
    >
      {options.map((option, index) => (
        <ToggleButton
          key={`${index}-toggleButton`}
          //   style={{ whiteSpace: "nowrap" }}
          value={option.value}
          aria-label="left aligned"
        >
          {option.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
