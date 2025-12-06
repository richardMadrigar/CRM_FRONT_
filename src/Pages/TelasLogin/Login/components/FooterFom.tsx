import { Box, Checkbox, Typography, useTheme } from "@mui/material";
import { LinkCore } from "src/Pages/components/LinkCore/LinkCore";
import { UrlConfigPublic } from "src/Routes/Config/UrlConfigPublic";

export const FooterFom = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				alignItems: { sm: "center" },
				justifyContent: "space-between",
				mb: { xs: 1, xl: 1.5 },
				"& > *": {
					color: "#474747",
				},
			}}
		>
			<Box
				sx={{
					justifyContent: "center",
					flexDirection: "row",
					alignItems: "center",
					display: "flex",
				}}
			>
				<Checkbox sx={{ color: "#4e4e4e" }} />

				<Typography
					sx={{
						fontSize: { xs: 12, sm: 14 },
						fontWeight: "bold",
						color: (theme) => theme.palette.grey[700],
					}}
				>
					Salvar login?
				</Typography>
			</Box>

			<Typography
				sx={{
					fontSize: { xs: 12, sm: 14 },
					alignItems: "center",
					fontWeight: "bold",
					cursor: "pointer",
					display: "flex",
					color: (theme) => theme.palette.grey[700],
				}}
			>
				<LinkCore
					color={`${theme.palette.primary.main}`}
					to={UrlConfigPublic.RecoverPassword}
				>
					Esqueceu a senha ?
				</LinkCore>
			</Typography>
		</Box>
	);
};
