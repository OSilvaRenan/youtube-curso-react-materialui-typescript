import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes =() => {
    return (
        <Routes>
            <Route path="/pagina-inical" element={<p>Página inicial</p>}></Route>
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
}