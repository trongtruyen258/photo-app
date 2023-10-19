import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainPage from "../feature/photo/pages/MainPage";
import Login from "../feature/login/pages/Login";
import Register from "../feature/login/pages/Register";
import NoPage from "../components/noPage/NoPage";
import AddEditPage from "../feature/photo/pages/AddEditPage";
import HomePage from "../feature/photo/pages/HomePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/edit/:id" element={<AddEditPage />} />
          <Route path="/add" element={<AddEditPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
