import React from "react";
import {
	Tooltip,
	TableCell,
	Box,
	Avatar,
	SxProps,
	Typography,
	Theme,
} from "@mui/material";
import { handleIfLimitCharacter } from "src/shared/Utils/LimitText";

interface ITdCore {
	values: string | number | null | React.ReactNode;
	textAlign?: "end" | "left" | "center" | "right" | "start";
	borderRadius?: string;
	borderBottom?: string;
	tooltip?: string;
	padding?: string;

	onClick?: (event: React.MouseEvent<HTMLTableCellElement>) => void;
	disabledClick?: boolean;
	sxStyle?: SxProps<Theme>;

	isLimit?: boolean;
	isLimitQTD?: number;
	subTitle?: string | number | null | React.ReactNode;
	avatar?: string;
}

const getInitials = (avatar: string) => {
	const parts = avatar.trim().split(" "); // Divide o nome em partes e remove espaços extras
	const firstInitial = parts[0]?.[0]?.toUpperCase() || ""; // Primeira letra do nome
	const secondInitial = parts[1]?.[0]?.toUpperCase() || ""; // Primeira letra do sobrenome, se existir
	return `${firstInitial}${secondInitial}`;
};

export const TdCore = ({
	values,
	onClick,
	borderRadius = "12px",
	padding = "5px 0px",
	textAlign = "left",
	borderBottom,
	tooltip,
	isLimit,
	isLimitQTD,
	sxStyle,
	subTitle,
	disabledClick,
	avatar,
}: ITdCore) => {
	return (
		<>
			<Tooltip
				title={
					tooltip ||
					(isLimitQTD &&
					typeof values === "string" &&
					values.length > isLimitQTD
						? values
						: "")
				}
			>
				<TableCell
					sx={{ padding: "4px 12px" }}
					onClick={!disabledClick ? onClick : undefined}
				>
					<Box
						sx={{
							display: avatar && avatar.trim()?.length > 0 ? "flex" : "block",
							alignItems: "center",
						}}
					>
						{avatar && (
							<Avatar
								sx={{
									bgcolor: (theme) => theme.palette.primary.main,
									fontSize: "1rem",
									marginRight: "8px",
									width: 36,
									height: 36,
								}}
							>
								{getInitials(avatar)}
							</Avatar>
						)}
						<Box>
							<Typography
								component="span"
								sx={{
									textAlign,
									display: "block",
									fontSize: ".8rem",
									fontWeight: "500",
									letterSpacing: ".4px",
									padding,
									borderRadius,
									borderBottom,
									whiteSpace: "nowrap",
									...sxStyle,
								}}
							>
								{typeof values === "string" && isLimit && isLimitQTD
									? handleIfLimitCharacter({
											LIMIT: isLimitQTD,
											value: values,
										})
									: values}
							</Typography>

							{subTitle && (
								<Typography
									component="span"
									sx={{
										textAlign,
										display: "block",
										fontSize: ".7rem",
										fontWeight: "500",
										letterSpacing: ".4px",
										color: (theme) => theme.palette.text.secondary,
									}}
								>
									{typeof subTitle === "string" && isLimit && isLimitQTD
										? handleIfLimitCharacter({
												LIMIT: isLimitQTD,
												value: subTitle,
											})
										: subTitle}
								</Typography>
							)}
						</Box>
					</Box>
				</TableCell>
			</Tooltip>
		</>
	);
};
