import { Box, Grid, Typography } from "@mui/material";
import { CardCore } from "../../CardCore/CardCore";
import React from "react";
interface ICardTable {
	isActive?: boolean;
	title: string;
	value1: string | number;
	onClick?: () => void;
	value2?: string;
	isHoverBackground?: boolean;

	icon?: {
		icon: React.ReactNode;
		color: string;
	};
}

export const CardTable = ({
	icon,
	title,
	onClick,
	value1,
	isActive,
	isHoverBackground,
}: ICardTable) => {
	return (
		<CardCore
			onClick={onClick}
			sxStyle={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				margin: 0,
				height: "100px",

				background: (theme) =>
					isActive ? theme.custom.gradient.cardSecondary : "",

				"&:hover": {
					background: (theme) =>
						isHoverBackground || isActive
							? theme.custom.gradient.cardSecondary
							: "",
				},
			}}
		>
			<Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
				<Box
					sx={{
						position: "relative",
						display: "inline-flex",
						mr: "12px",
					}}
				>
					<Box
						sx={{
							borderRadius: "50%",
							boxShadow: "0px 0px 8px 0px rgba(164, 164, 164, 0.518)",
							width: { xs: "30px", sm: "40px" },
							height: { xs: "30px", sm: "40px" },
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							color: icon?.color,
						}}
					>
						{icon?.icon}
					</Box>
				</Box>

				<Box>
					<Typography
						color="text.secondary"
						fontWeight="500"
						sx={{ fontSize: { xs: "12px", sm: "13px" } }}
					>
						{title}
					</Typography>
					<Typography
						fontWeight="500"
						sx={{ fontSize: { xs: "12px", sm: "13px" } }}
					>
						{value1}
					</Typography>
				</Box>
			</Grid>
		</CardCore>
	);
};
