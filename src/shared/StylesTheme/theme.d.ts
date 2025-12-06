// theme.d.ts
import { Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Theme {
		custom: {
			color: {
				money: string;
				percent: string;
			};

			gradient: {
				cardPrimary: string;
				cardSecondary: string;
			};
		};
	}

	interface ThemeOptions {
		custom?: {
			color: {
				money: string;
				percent: string;
			};

			gradient: {
				cardPrimary: string;
				cardSecondary: string;
			};
		};
	}
}
