// theme.d.ts
import { Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Theme {
		customVariables: {
			customBackgroundColor: string;
		};
	}

	interface ThemeOptions {
		customVariables?: {
			customBackgroundColor?: string;
		};
	}
}
