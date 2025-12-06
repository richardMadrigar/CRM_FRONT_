import { createTheme } from "@mui/material";
import { customVariables, paletteTheme } from "./Components";

export const themeDark = createTheme({
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					"--TextField-brandBorderColor": "#ced0d1",
					"--TextField-brandBorderHoverColor": "#B2BAC2",
					"--TextField-brandBorderFocusedColor": "#b0b9c2",
					"& label.Mui-focused": {
						color: "var(--TextField-brandBorderFocusedColor)",
					},
					"& .MuiInput-outlined:before": {
						borderBottomColor: "#ced0d1", // Cor da linha padrão
					},
					"& .MuiInput-outlined:hover:not(.Mui-disabled):before": {
						borderBottomColor: "#ced0d1", // Cor da linha no hover
					},
					"& .MuiOutlinedInput-root": {
						"& fieldset": {
							borderColor: "#ced0d1", // Cor da borda para variant="outlined"
						},
						"&:hover fieldset": {
							borderColor: "#ced0d1", // Cor da borda no hover
						},
						"&.Mui-focused fieldset": {
							borderColor: "#ced0d1", // Cor da borda ao focar
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
		mode: "dark",
		primary: {
			main: paletteTheme.color.primary,
		},
		secondary: {
			main: paletteTheme.color.secondary,
		},

		// background: {
		//   paper: "#313541",
		// },
		action: {
			disabled: "#737e8ca1",
		},
	},
	custom: customVariables.dark,
});
