import React from 'react';
import styled from '@emotion/styled';
import ThemeToggleContext from '../../contexts/ThemeToggleContext';

const StyledNavbar = styled.nav`
  height: 5em;
  border-bottom: 0.1em solid gray;
  color: ${(props) => props.theme.color.text};
  background: ${(props) => props.theme.color.background};
  .container {
    // padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    button {
      margin: 0 2em;
      padding: 0.5em 1em;
      font-size: 1em;
      background: transparent;
      color: ${(props) => props.theme.color.text};
      border: 0.1em solid ${(props) => props.theme.color.text};
    }
  }
`;

const Navbar = (props) => {
  const { isDarkTheme, toggleTheme } = React.useContext(ThemeToggleContext);
  return (
    <StyledNavbar className={props.className}>
      <div className={'container'}>
        <h1>
          {props.title}
        </h1>
        <button onClick={toggleTheme}>
          Switch to {isDarkTheme ? 'Light': 'Dark'} mode
        </button>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;