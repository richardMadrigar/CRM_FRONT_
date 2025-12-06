import {
	createContext,
	useContext,
	ReactNode,
	useState,
	useMemo,
	FC,
} from "react";
import { PaletteMode, ThemeProvider } from "@mui/material";

import { LightTheme } from "src/shared/StylesTheme/ThemeLight";
import { themeDark } from "src/shared/StylesTheme/ThemeDark";
import { getTheme } from "src/shared/setup/API/api";

interface IThemeContextData {
	themeName: PaletteMode;
	toggleTheme: {
		toggleColorMode: () => void;
	};
}

const ThemeContext = createContext({} as IThemeContextData);

export const AppThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [themeName, setThemeName] = useState<PaletteMode>(() => {
		const themeName = localStorage.getItem(getTheme);
		if (themeName && themeName === "dark") return "dark";

		return "light";
	});

	const theme = useMemo(() => {
		if (themeName === "dark") return themeDark;
		return LightTheme;
	}, [themeName]);

	const toggleTheme = useMemo(
		() => ({
			toggleColorMode: () => {
				setThemeName((prevMode: PaletteMode) => {
					const resultTheme = prevMode === "light" ? "dark" : "light";
					localStorage.setItem(getTheme, resultTheme);
					return resultTheme;
				});
			},
		}),
		[],
	);

	return (
		<ThemeContext.Provider value={{ themeName, toggleTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export const useAppThemeContext = (): IThemeContextData =>
	useContext(ThemeContext);
