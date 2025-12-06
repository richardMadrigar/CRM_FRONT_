import { SxProps, Box, Typography } from "@mui/material";

type IDividerCore = {
	title?: string;
	sxStyle?: SxProps;
	textAlign?: "left" | "right" | "center";
};

export const DividerCore = ({ title, sxStyle }: IDividerCore) => {
	return (
		<Box
			sx={{
				margin: "20px 0",
				background: "#d6d6d66a",
				borderRadius: "8px",
				padding: "4px 12px",
				...sxStyle,
			}}
		>
			<Typography sx={{ color: (theme) => theme.palette.text.primary }}>
				{title}
			</Typography>
		</Box>
	);
};
