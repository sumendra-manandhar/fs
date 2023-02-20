import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
// import Footer from "../Footer";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)"); //gives true or false boolean depending if its achieved in screen
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <Box display={isNonMobile ? "flex" : "block"} width='100%' height='100%'>
      <Box flexGrow={1}>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
        {/* <Footer /> */}
      </Box>
    </Box>
  );
};

export default Layout;
