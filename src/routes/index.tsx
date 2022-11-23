import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes =() => {
    return (
        <Routes>
            <Route path="/pagina-inical" element={<Button variant="contained" color="primary">Teste</Button>} />
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
}