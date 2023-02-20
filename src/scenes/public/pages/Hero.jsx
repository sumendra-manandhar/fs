import React from "react";
import bgImage from "../../../assets/bg.png";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          color: theme.palette.grey[1000],
          backgroundColor: theme.palette.background.default,
          // backgroundColor:
          //   "radial-gradient(100% 100% at 50% 0%, #FFFFFF 0%, #F1F1F1 100%)",
        }}
        className=' w-11/12 m-auto h-auto'
      >
        <Box className=' mt-12 py-10 sm:py-16 lg:py-24 '>
          <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'>
              <div>
                <h1 className='text-4xl font-bold sm:text-6xl xl:text-7xl'>
                  Better <br />
                  Intelligence
                </h1>
                <p className='mt-6 text-base  sm:text-xl'>
                  With our AI Powered market intelligence tools you can now
                  access to the credible market intelligence anytime at your
                  finger tips. You don’t need to be an insider anymore.
                </p>

                <Link
                  to={"/signup"}
                  className='hover:shadow-2xl inline-flex items-center px-6 py-5 text-base font-semibold text-black transition-all duration-200 bg-green-300 mt-9 hover:bg-green-400 focus:bg-green-400'
                >
                  <h1>Get started for free </h1>
                </Link>

                <div className='mt-8 border-t-2  lg:mt-16 sm:mt-14'>
                  <div className='pt-8 sm:flex sm:items-center sm:justify-between sm:pt-8'>
                    <p className='text-base font-semibold '>App available on</p>

                    <div className='flex items-center mt-5 space-x-5 sm:mt-0'>
                      <Link
                        to='https://play.google.com/store/apps/details?id=com.navya'
                        className=' p-1 block transition-all duration-200 hover:opacity-80 focus:opacity-80'
                      >
                        <img
                          className='w-auto rounded h-14 sm:h-16 outline hover:shadow-2xl'
                          src='https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png'
                          alt=''
                        />
                      </Link>
                      <Button
                        disabled
                        to='/services'
                        className=' p-1  block transition-all duration-200 hover:opacity-80 focus:opacity-80'
                      >
                        <img
                          className=' blur-[2px]  w-auto rounded h-14 sm:h-16 '
                          src='https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png'
                          alt=''
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  className=' h-[70vh] m-auto float-center sm:float-right sm:mr-16 '
                  src={bgImage}
                  alt=''
                />
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
