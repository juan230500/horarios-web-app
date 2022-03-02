import React, { useState } from "react";
import styled from "styled-components";
import HourInput from "./HourInput";

const Container = styled.div`
  display: flex;
  gap: 24px;

  p {
    width: 100px;
  }
`;

const DAYS = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const EmployeeRow = (props) => {
  const [hourList, setHourList] = useState(DAYS.map((d) => [10, 18]));

  const edit = (i, v) => {
    const newHourList = [...hourList];
    newHourList[i] = v;
    setHourList(newHourList);
  };

  console.log(hourList);

  return (
    <Container>
      <p>{props.name}</p>
      <p>
        {props.onlyTitles
          ? "HORAS"
          : hourList.reduce((ac, cr) => ac + Math.abs(cr[1] - cr[0]), 0)}
      </p>
      {DAYS.map((el, i) => (
        <HourInput
          value={hourList[i]}
          edit={(v) => edit(i, v)}
          onlyTitles={props.onlyTitles}
          day={el.substring(0, 3)}
        ></HourInput>
      ))}
    </Container>
  );
};

export default EmployeeRow;
