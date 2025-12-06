import { Box, SxProps, Theme, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { useAppThemeContext } from "src/Contexts/ThemeContextConfig";

type ObjColorKeys = "primary" | "warning" | "error" | "info";

interface ICardAlerts {
	action?: ReactNode;
	title: string;
	subTitle?: string;
	titleRequired?: string;
	sxStyle?: SxProps<Theme>;
	icon?: ReactNode;
	color?: ObjColorKeys;
}

export const CardAlerts = ({
	action,
	title,
	subTitle,
	titleRequired,
	sxStyle,
	icon,
	color = "primary",
}: ICardAlerts) => {
	const theme = useTheme();
	const { themeName } = useAppThemeContext();

	const objColor: Record<ObjColorKeys, string> = {
		primary: themeName === "dark" ? "#071318" : "#E5F6FD",
		warning: theme.palette.warning.main,
		error: theme.palette.error.main,
		info: theme.palette.grey[400],
	};

	return (
		<Box
			sx={{
				background: objColor[color],
				padding: "12px",
				width: "100%",
				borderRadius: "12px",
				margin: "16px 0",
				...sxStyle,
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					{icon && <Box sx={{ marginRight: "12px" }}>{icon}</Box>}

					<Box>
						<Typography sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
							{titleRequired}
						</Typography>
						<Typography
							sx={{ fontWeight: "500", fontSize: { xs: "14px", sm: "16px" } }}
						>
							{title}
						</Typography>
						<Typography sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
							{subTitle}
						</Typography>
					</Box>
				</Box>

				{action}
			</Box>
		</Box>
	);
};
