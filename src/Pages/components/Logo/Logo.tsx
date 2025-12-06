import { Box } from "@mui/material";
import { toAbsoluteUrl } from "src/shared/setup/toAbsoluteUrl";

interface ILogo {
	width?: string;
	height?: string;
}

export const Logo = ({ height = "50px", width = "50px" }: ILogo) => {
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<img
				alt="logo da empresa "
				src={toAbsoluteUrl("/media/logos/CORRECTORS - curta.svg")}
				style={{ height, width }}
			/>
		</Box>
	);
};
