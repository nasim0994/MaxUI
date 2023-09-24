import { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [themeToggle, setThemeToggle] = useState(
    JSON.parse(localStorage.getItem("MaxUI-theme")) || false
  );

  const handelThemeToggle = () => {
    setThemeToggle(!themeToggle);
  };

  useEffect(() => {
    if (themeToggle) {
      localStorage.setItem("MaxUI-theme", true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      localStorage.setItem("MaxUI-theme", false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [themeToggle]);

  const contextInfo = { handelThemeToggle, themeToggle };
  return <Context.Provider value={contextInfo}>{children}</Context.Provider>;
};

export const UseContext = () => {
  const context = useContext(Context);
  return context;
};

export default ContextProvider;
