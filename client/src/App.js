import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createTheme } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import Announcement from "scenes/announcement";
import ManageFacultys from "scenes/manageFaculty";
import AssignMentors from "scenes/assignMentor";
import AssignPanels from "scenes/assignPanel";
import GroupManages from "scenes/groupmanage";
import Submissions from "scenes/submission";
import LoginPage from "scenes/loginPage";
import { setMode, setLogout } from "state";

function App() {
  const mode = useSelector((state) => state.mode);
  const user = useSelector((state) => state.user);
  const isAuth = useSelector((state) => Boolean(state.token));
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route element={<Layout />}>
              <Route
                path="/dashboard"
                element={isAuth ? <Dashboard /> : <Navigate to="/" />}
              />
              <Route
                path="/announcement"
                element={isAuth ? <Announcement /> : <Navigate to="/" />}
              />
              <Route
                path="/managefaculty"
                element={isAuth ? <ManageFacultys /> : <Navigate to="/" />}
              />
              <Route
                path="/assignmentors"
                element={isAuth ? <AssignMentors /> : <Navigate to="/" />}
              />
              <Route
                path="/assignpanels"
                element={isAuth ? <AssignPanels /> : <Navigate to="/" />}
              />
              <Route
                path="/groupmanage"
                element={isAuth ? <GroupManages /> : <Navigate to="/" />}
              />
              <Route
                path="/submission"
                element={isAuth ? <Submissions /> : <Navigate to="/" />}
              />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;






// import Dashboard from "scenes/dashboard";
// import Layout from "scenes/layout";
// import { CssBaseline,ThemeProvider } from "@mui/material";
// import { BrowserRouter,Navigate,Route, Routes } from "react-router-dom";
// import {createTheme} from "@mui/material";
// import {useMemo} from "react";
// import { useSelector } from "react-redux";
// import {themeSettings} from "theme";
// import Announcement from "scenes/announcement";
// import ManageFacultys from "scenes/manageFaculty";
// import AssignMentors from "scenes/assignMentor";
// import AssignPanels from "scenes/assignPanel";
// import GroupManages from "scenes/groupmanage";
// import Submissions from "scenes/submission";
// import LoginPage from 'scenes/loginPage';

// function App() {
//   const mode = useSelector((state) => state.mode);
//   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
//   const isAuth = Boolean(useSelector((state) => state.token));
  
//   return (
//     <div className="app">
//       <BrowserRouter>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//           <Routes>

//           <Route path="/" element={<LoginPage />} />
//             <Route
//               path="/dashboard"
//               element={isAuth ? <Dashboard /> : <Navigate to="/" />}
//             />
//           </Routes>
//         </ThemeProvider>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;