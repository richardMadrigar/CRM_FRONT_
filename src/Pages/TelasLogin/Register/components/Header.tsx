import { Box, Typography } from "@mui/material";
import { TurnedInIcon } from "src/Pages/components/Icons/Icons";

export const HeaderRegister = () => {
	return (
		<Box
			sx={{
				margin: "0 0 24px 0",
				alignItems: "center",
				display: "flex",
				padding: "8px",
			}}
		>
			<TurnedInIcon
				sx={{
					color: (theme) => theme.palette.primary.main,
					marginRight: "8px",
				}}
			/>
		</Box>
	);
};
