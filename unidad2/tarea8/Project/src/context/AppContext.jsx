import { createContext, useEffect, useState } from "react";
import { THEME } from "../theme/styles";
import { useColorScheme } from "react-native";

const personObj = {
  id: 1,
  name: "Juan",
  lastName: "Lopez",
  age: 20,
  country: "Mexico",
  city: "Morelia",
  school: "ITM",
  isActive: false,
};

const styles = {
  light: {
    primary: THEME.COLORS.BLACK.NIGHT,
    secondary: THEME.COLORS.BLACK.EERIE,
  },
  dark: {
    primary: THEME.COLORS.BLACK.NIGHT,
    secondary: THEME.COLORS.BLACK.EERIE,
  },
};

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  const isDarkMode = useColorScheme();
  console.log("isDarkMode", isDarkMode);

  const [theme, setTheme] = useState(styles);
  const [person, setPerson] = useState(personObj);

  const handleActive = () => {
    setPerson({ ...person, isActive: !person.isActive });
  };

  const values = {
    handleActive,
    person: person,
    theme: theme,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
