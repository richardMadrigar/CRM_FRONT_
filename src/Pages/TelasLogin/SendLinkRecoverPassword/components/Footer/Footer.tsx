import { Typography } from "@mui/material";
import { LinkCore } from "src/Pages/components/LinkCore/LinkCore";

export const FooterSendLinkRecoverPassword = () => {
	return (
		<Typography
			sx={{
				margin: "8px 4px",
				fontSize: { xs: ".9rem", md: "1rem", lg: "1.1rem" },
				color: (theme) => theme.palette.grey[700],
			}}
		>
			Faça seu login{" "}
			<LinkCore color="#2478fff5" to="login">
				aqui.
			</LinkCore>
		</Typography>
	);
};
