import { Button } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./auth";
import Dashboard from "./Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<Navigate to={"/auth"} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
