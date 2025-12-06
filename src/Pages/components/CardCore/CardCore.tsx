import { FC } from "react";
import { Paper, SxProps, Theme } from "@mui/material";
import { CardProps } from "@mui/material/Card/Card";
import { useAppThemeContext } from "src/Contexts/ThemeContextConfig";

type ICardCore = CardProps & {
	sxStyle?: SxProps<Theme>;
	elevation?: number;
};

export const CardCore: FC<ICardCore> = ({
	sxStyle,
	children,
	elevation,
	...props
}) => {
	const { themeName } = useAppThemeContext();

	return (
		<Paper
			elevation={elevation === undefined ? 1 : elevation}
			sx={{
				margin: "1rem",
				boxShadow:
					themeName === "dark"
						? "0px 0px 10px 0px rgba(51, 51, 51, 0.292)"
						: "0px 0px 10px 0px rgba(222, 222, 222, 0.255)",
				padding: { xs: ".7rem", sm: "16px" },
				border: "1px solid #84848437",
				overflow: "hidden",
				...sxStyle,
			}}
			{...props}
		>
			{children}
		</Paper>
	);
};
