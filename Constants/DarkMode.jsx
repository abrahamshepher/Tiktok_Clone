import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => (props.isDarkMode ? "#333333" : "#ffffff")};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#333333")};
`;

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Container isDarkMode={isDarkMode}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      {/* Rest of your application */}
    </Container>
  );
};

export default DarkModeToggle;
