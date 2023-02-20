import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import logo from "../../assets/logo.png";

import { useDispatch } from "react-redux";
import { useTheme } from "@mui/system";
import FlexBetween from "../../components/FlexBetween";
import { setMode } from "state";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { Box, IconButton, Slide, useScrollTrigger } from "@mui/material";

import PropTypes from "prop-types";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
// import Login from "./public/Login/Login";

// Navbar Hide on Scroll -------------

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

// Navbar Hide on Scroll --------------------

function Navbar(props) {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Box
          sx={{
            color: theme.palette.background.default,
            backgroundColor: theme.palette.primary.main,
          }}
          class=' fixed w-full'
        >
          <nav
            class='  border-gray-200 py-2.5 dark:bg-gray-900'
            style={{ backgroundColor: theme.palette.primary.main }}
          >
            <div class='flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto'>
              <div>
                <Link to='/dashboard'>
                  {" "}
                  <img src={logo} alt='logo' width='120px'></img>{" "}
                </Link>
              </div>
              {/* <span class='  self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
								NAVYA ADVISORS
							</span> */}

              <div class='flex items-center lg:order-2'>
                <a
                  href='/login'
                  class=' text-white hover:bg-gray-50 hover:text-black focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'
                >
                  Log in
                </a>

                <a
                  href='/signup'
                  class='text-white bg-green-700 hover:bg-white hover:text-black focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800'
                >
                  Get Started
                </a>

                <FlexBetween gap='1.5rem'>
                  <IconButton onClick={() => dispatch(setMode())}>
                    {theme.palette.mode === "dark" ? (
                      <DarkModeOutlined sx={{ fontSize: "25px" }} />
                    ) : (
                      <LightModeOutlined sx={{ fontSize: "25px" }} />
                    )}
                  </IconButton>
                </FlexBetween>
                <button
                  data-collapse-toggle='mobile-menu-2'
                  type='button'
                  class='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                  aria-controls='mobile-menu-2'
                  aria-expanded='false'
                >
                  <span class='sr-only'>Open main menu</span>
                  <svg
                    class='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <svg
                    class='hidden w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                class='items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1'
                id='mobile-menu-2'
              >
                <ul class='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                  <li>
                    <a
                      href='/about'
                      class='text-white block py-2 pl-3 pr-4  border-b border-gray-100  lg:border-0 lg:p-0 '
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href='/services'
                      class='text-white block py-2 pl-3 pr-4  border-b border-gray-100  lg:border-0 lg:p-0 '
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href='/education'
                      class='text-white block py-2 pl-3 pr-4  border-b border-gray-100  lg:border-0 lg:p-0 '
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      href='/contact'
                      class='text-white block py-2 pl-3 pr-4  border-b border-gray-100  lg:border-0 lg:p-0 '
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </Box>
      </AppBar>
    </HideOnScroll>
  );
}
export default Navbar;
