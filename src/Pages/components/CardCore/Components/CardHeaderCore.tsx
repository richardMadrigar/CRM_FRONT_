import { Children, ReactNode } from "react";
import { Box, SxProps, Theme, Tooltip, Typography } from "@mui/material";
import { handleIfLimitCharacter } from "src/shared/Utils/LimitText";

import { CardCore } from "../CardCore";

interface IHeaderCardCore {
	icon?: React.ReactNode;
	title?: string;
	subTitle?: string;
	limitCharacter?: number;
	buttonAdd?: ReactNode[];
	sxStyle?: SxProps<Theme>;
	elevation?: number | undefined;
}
export const CardHeaderCore = ({
	icon,
	title,
	subTitle,
	limitCharacter,
	buttonAdd,
	sxStyle,
}: IHeaderCardCore) => {
	return (
		<CardCore
			sxStyle={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				flexWrap: "wrap",
				...sxStyle,
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					marginBottom: { xs: "12px", lg: "0" },
				}}
			>
				{icon && (
					<Box sx={{ display: "flex", marginRight: "10px" }}>{icon}</Box>
				)}

				<Box>
					{title && (
						<Tooltip
							title={
								limitCharacter && title.trim().length > limitCharacter && title
							}
						>
							<Typography
								sx={{
									fontSize: { xs: ".8rem", sm: "0.9rem", lg: "1rem" },
									fontWeight: "500",
									letterSpacing: ".5px",
									marginRight: "8px",
								}}
							>
								{limitCharacter
									? handleIfLimitCharacter({
											value: title,
											LIMIT: limitCharacter,
										})
									: title}
							</Typography>
						</Tooltip>
					)}

					{subTitle && (
						<Typography sx={{ fontSize: { xs: ".7rem", sm: ".8rem" } }}>
							{subTitle}
						</Typography>
					)}
				</Box>
			</Box>

			<Box sx={{ display: "flex" }}>
				{Children.toArray(buttonAdd?.map((item) => <Box>{item}</Box>))}
			</Box>
		</CardCore>
	);
};
