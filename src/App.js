// import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
// // import Navbar from "components/Navbar";
// import { useMemo } from "react";
// import { useSelector } from "react-redux";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Hero from "scenes/public/pages/Hero";
// import { themeSettings } from "./theme";
// import "./App.css";
// import Layout from "scenes/public/layout";
// import LandingPage from "scenes/public/landing";

// function App() {
//   // const mode = useSelector((state) => state.global.mode);
//   // const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
//   return (
//     <div className='App'>
//       <h1>this</h1>
//       <Hero />
//       <BrowserRouter>
//         {/* <ThemeProvider theme={theme}> */}
//         <CssBaseline />
//         <Routes>
//           <Route element={<Layout />}>
//             <Route path='/landing' element={<LandingPage />} />
//           </Route>
//         </Routes>
//         {/* </ThemeProvider> */}
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Footer from "scenes/public/Footer";
import Layout from "scenes/public/layout";

const App = () => {
  return (
    <>
      <Footer />
    </>
  );
};

export default App;
