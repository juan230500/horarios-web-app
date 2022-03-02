import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import ManagerPage from "./components/ManagerPage";
import EmployeePage from "./components/EmployeePage";
import styled from "styled-components";
import { Button } from "@mui/material";

const StyledLink = styled(Link)`
  font-size: 24px;
  margin: 0 8px;
`;

function App() {
  return (
    <div className="App">
      <nav>
        <StyledLink to="/schedule">
          <Button variant="contained">Horarios</Button>
        </StyledLink>
        <StyledLink to="/emloyee">
          <Button variant="contained">Marcas</Button>
        </StyledLink>
      </nav>
      <Routes>
        <Route path="/schedule" element={<ManagerPage />} />
        <Route path="/emloyee" element={<EmployeePage />} />
      </Routes>
    </div>
  );
}

export default App;
