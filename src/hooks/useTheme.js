import React from "react";
import { ThemeContext } from "../providers/theme";

export const useTheme = () => React.useContext(ThemeContext);