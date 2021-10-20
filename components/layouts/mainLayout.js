import React from 'react';
import Head from 'next/head';

import { ThemeProvider } from '@emotion/react';
import useDarkMode from 'use-dark-mode';
import ThemeToggleContext from '../../contexts/ThemeToggleContext';
import { darkTheme, lightTheme } from '../../theme';

import Navbar from './Navbar';
import styled from '@emotion/styled';

const StyledMain = styled.main`
  // margin-top: 5em;
  height: calc(100vh - 5em);
  width: 100%;
`;

const MainLayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function MainLayout(props) {
  const darkMode = useDarkMode(true);
  const currentTheme = darkMode.value ? darkTheme : lightTheme;

  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Dark Mode demo</title>
      </Head>
      <ThemeProvider theme={currentTheme}>
        {isMounted && (
          <ThemeToggleContext.Provider
            value={{
              isDarkTheme: darkMode.value,
              toggleTheme: darkMode.toggle,
            }}
          >
            <MainLayoutContainer>
              <Navbar title="Dark Mode Demo" />
              <StyledMain>{props.children}</StyledMain>
            </MainLayoutContainer>
          </ThemeToggleContext.Provider>
        )}
      </ThemeProvider>
    </>
  );
}

export default MainLayout;
