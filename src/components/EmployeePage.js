import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 8px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  max-width: 560px;
  border: 1px solid #ccc;
`;

const EmployeePage = () => {
  return (
    <Div>
      <Typography variant="h2">Registrar marca</Typography>
      <Typography variant="h4">
        Fecha: {new Date().toISOString().substring(0, 10)}
      </Typography>
      <Typography variant="h4">
        Hora actual: {new Date().toISOString().substring(11, 19)}
      </Typography>
      <TextField
        id="outlined-basic"
        label="Escriba su código"
        variant="outlined"
      />
      <div style={{ display: "flex", gap: 8 }}>
        <Button style={{ width: 120 }} variant="contained" color="success">
          Registrar entrada
        </Button>
        <p>Hora de entrada: 08:05:15</p>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <Button style={{ width: 120 }} variant="contained" color="error">
          Registrar salida
        </Button>
        <p>Hora de salida: XX:XX:XX</p>
      </div>
    </Div>
  );
};

export default EmployeePage;
