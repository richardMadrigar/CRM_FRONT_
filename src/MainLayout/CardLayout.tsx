import { FC, ReactNode } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useStyles } from "src/Pages/components/ModalFilterCore/Index";

export const CardLayout: FC<{ children: ReactNode }> = ({ children }) => {
	const theme = useTheme();
	const classes = useStyles();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<Box
			className={classes.customScrollbar}
			sx={{
				maxHeight: matches ? `100vh` : "",
				transition: "max-height 0.5s ease-in-out",
				overflow: "auto",

				padding: { xs: "8px", sm: "24px", xl: "32px" },
			}}
		>
			{children}
		</Box>
	);
};
