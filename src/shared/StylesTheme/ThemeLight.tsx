import { createTheme } from "@mui/material";
import { customVariables, paletteTheme } from "./Components";

export const LightTheme = createTheme({
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					"--TextField-brandBorderColor": "#a9a9a9",
					"--TextField-brandBorderHoverColor": "#a9a9a9",
					"--TextField-brandBorderFocusedColor": "#a9a9a9",
					"& label.Mui-focused": {
						color: "var(--TextField-brandBorderFocusedColor)",
					},
					"& .MuiInput-outlined:before": {
						borderBottomColor: "#a9a9a9", // Cor da linha padrão
					},
					"& .MuiInput-outlined:hover:not(.Mui-disabled):before": {
						borderBottomColor: "#a9a9a9", // Cor da linha no hover
					},
					"& .MuiOutlinedInput-root": {
						"& fieldset": {
							borderColor: "#a9a9a9", // Cor da borda para variant="outlined"
						},
						"&:hover fieldset": {
							borderColor: "#a9a9a9", // Cor da borda no hover
						},
						"&.Mui-focused fieldset": {
							borderColor: "#a9a9a9", // Cor da borda ao focar
						},
					},
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
					borderRadius: "10px",
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: "16px",
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: "12px",
				},
			},
		},
	},
	palette: {
		mode: "light",
		primary: {
			main: paletteTheme.color.primary,
			contrastText: "#fff",
		},
		secondary: {
			main: paletteTheme.color.secondary,
		},
		action: {
			disabled: "#6b78898d",
		},
	},
	custom: customVariables.light,
});
