import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";
import { CssBaseline,ThemeProvider } from "@mui/material";
import { BrowserRouter,Navigate,Route, Routes } from "react-router-dom";
import {createTheme} from "@mui/material";
import {useMemo} from "react";
import { useSelector } from "react-redux";
import {themeSettings} from "theme";
import Announcement from "scenes/announcement";
import ManageFacultys from "scenes/manageFaculty";


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
    <BrowserRouter>
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element ={<Navigate to="/dashboard" repalce/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/announcement" element={<Announcement/>}/>
            <Route path="/managefaculty" element={<ManageFacultys/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
      </div>
  );
}

export default App;
