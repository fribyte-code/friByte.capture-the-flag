import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import Leaderboard from "./pages/Leaderboard";
import Admin from "./pages/Admin";
import AdminTeamManagement from "./pages/AdminTeamManagement";
import useTheme from "./hooks/useTheme";
import config from "./config";
import useDocumentTitle from "./utils/useDocumentTitle";

export const ThemeContext = createContext<{
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
}>({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: (theme) => {},
});

const App = () => {
  const { theme, setTheme, toggleTheme } = useTheme();

  useDocumentTitle(
    config.brand_title ?? "friByte CTF",
    config.brand_favicon ?? "images/favicon.ico",
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/teams" element={<AdminTeamManagement />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
