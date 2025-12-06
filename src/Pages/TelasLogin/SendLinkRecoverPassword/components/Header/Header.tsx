import { Box, Typography } from "@mui/material";
import { TurnedInIcon } from "src/Pages/components/Icons/Icons";

export const HeaderSendLinkRecoverPassword = () => {
	return (
		<Box
			sx={{
				marginBottom: "24px",
				alignItems: "center",
				display: "flex",
			}}
		>
			<TurnedInIcon
				sx={{
					color: (theme) => theme.palette.primary.main,
					marginRight: "8px",
				}}
			/>

			<Typography
				sx={{
					fontSize: { xs: ".8rem", md: ".9rem", lg: "1rem" },
					color: (theme) => theme.palette.common.black,
				}}
			>
				Recupere sua senha com email !
			</Typography>
		</Box>
	);
};
