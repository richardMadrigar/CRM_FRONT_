import { IconButton, Tooltip } from "@mui/material";
import { useAppThemeContext } from "src/Contexts/ThemeContextConfig";
import {
	Brightness4Icon,
	Brightness7Icon,
} from "src/Pages/components/Icons/Icons";

export const ToggleTheme = () => {
	const { toggleTheme, themeName } = useAppThemeContext();

	return (
		<Tooltip title="Trocar tema">
			<IconButton onClick={toggleTheme.toggleColorMode}>
				{themeName === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
		</Tooltip>
	);
};
