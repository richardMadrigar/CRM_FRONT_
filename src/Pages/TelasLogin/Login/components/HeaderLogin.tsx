import { Box, Typography, useTheme } from "@mui/material";
import { LinkCore } from "src/Pages/components/LinkCore/LinkCore";

export const HeaderLogin = () => {
	const theme = useTheme();
	return (
		<Box sx={{ mb: "1rem" }}>
			<Typography
				sx={{
					color: (theme) => theme.palette.grey[700],
					fontWeight: "500",
					fontSize: { xs: "18px", sm: "22px" },
					mb: "1rem",
				}}
			>
				Faça seu login
			</Typography>
		</Box>
	);
};
