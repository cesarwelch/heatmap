import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const BasicSelect = (props) => {
  const { value, setValue } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          style={{ background: "white" }}
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={1}>1 Minute</MenuItem>
          <MenuItem value={30}>30 Minutes</MenuItem>
          <MenuItem value={60}>1 Hour</MenuItem>
          <MenuItem value={180}>3 Hours</MenuItem>
          <MenuItem value={"day"}>Day</MenuItem>
          <MenuItem value={"all"}>All Event</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
