import { Box, Slider, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Label = styled(Typography)`
  position: relative;
  top: 8px;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const HourInput = (props) => {
  const handleChange = (event, newValue) => {
    props.edit(newValue);
  };

  return (
    <Div>
      <Box
        sx={{
          width: 120,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.onlyTitles ? (
          <Label variant="">{props.day}</Label>
        ) : (
          [
            <Label variant="">
              {props.value[0] === props.value[1]
                ? "Libre"
                : props.value[0] + "-" + props.value[1]}
            </Label>,
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={props.value}
              onChange={handleChange}
              getAriaValueText={() => "asdasdsa"}
              valueLabelDisplay="auto"
              min={8}
              max={22}
            />,
          ]
        )}
      </Box>
    </Div>
  );
};

export default HourInput;
