import React, { useState, createContext, useContext } from "react";

// 👉 Create context
const ThemeContext = createContext();

function ThemedComponent() {
  // 👉 Use theme from context
  const theme = useContext(ThemeContext);

  return (
    <div style={{
      background: theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#000" : "#fff",
      padding: "20px",
      borderRadius: "8px"
    }}>
      <h3>Current Theme: {theme}</h3>
      <p>This component uses the theme from context!</p>
    </div>
  );
}

export default function ThemeApp() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    // 👉 Switch between "light" and "dark"
    setTheme(theme=>theme==='light'?"dark":"light")
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h2>Theme Switcher Example</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ThemedComponent />
      </div>
    </ThemeContext.Provider>
  );
}
