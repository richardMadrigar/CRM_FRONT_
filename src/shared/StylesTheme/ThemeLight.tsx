import { createTheme } from "@mui/material";
import { customVariables, paletteTheme } from "./Components";

export const LightTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#E4E4E4FF",
          "--TextField-brandBorderHoverColor": "#C3C6C8FF",
          "--TextField-brandBorderFocusedColor": "#C6CACEFF",
          "& label.Mui-focused": {
            color: "var(--TextField-brandBorderFocusedColor)",
          },
          "& .MuiInput-outlined:before": {
            borderBottomColor: "#E4E4E4FF", // Cor da linha padrão
          },
          "& .MuiInput-outlined:hover:not(.Mui-disabled):before": {
            borderBottomColor: "#C3C6C8FF", // Cor da linha no hover
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#E4E4E4FF", // Cor da borda para variant="outlined"
            },
            "&:hover fieldset": {
              borderColor: "#C3C6C8FF", // Cor da borda no hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#C6CACEFF", // Cor da borda ao focar
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
