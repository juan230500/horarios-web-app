import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import EmployeeRow from "./EmployeeRow";

const Div = styled.div`
  margin: auto;
  padding: 16px;
`;

const EMPLOYEES = [
  "NOMBRE",
  "persona1",
  "persona2",
  "persona3",
  "persona4",
  "persona5",
];

const ManagerPage = () => {
  return (
    <Div>
      <Typography variant="h2">Crear horarios para Tienda X</Typography>
      <Typography variant="h5">semana X del Lun Y al Dom Z</Typography>
      {EMPLOYEES.map((el, i) => (
        <EmployeeRow onlyTitles={i === 0} name={el}></EmployeeRow>
      ))}
    </Div>
  );
};

export default ManagerPage;
