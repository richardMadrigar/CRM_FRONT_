import { Box, Typography, SxProps, Theme } from "@mui/material";

interface ITitleWithValueCore {
	title?: string;
	value?: string | null;

	sxStyleTitle?: SxProps<Theme>;
	sxStyleValue?: SxProps<Theme>;
	isFlex?: boolean;
}

export const TitleWithValueCore = ({
	title,
	value,
	isFlex,
	sxStyleTitle,
	sxStyleValue,
}: ITitleWithValueCore) => {
	return (
		<Box
			sx={{
				display: isFlex ? "flex" : "block",
				alignItems: isFlex ? "center" : "inherit",
				"& > *": { fontSize: ".9rem" },
			}}
		>
			{title && (
				<Typography
					sx={{
						marginRight: "8px",
						fontSize: { xs: "10px", sm: "12px", md: "14px" },
						...sxStyleTitle,
					}}
				>
					{title}
				</Typography>
			)}

			<Typography
				sx={{
					fontSize: { xs: "14px", sm: "1rem", md: "1.1rem" },
					...sxStyleValue,
				}}
			>
				{value || "' '"}
			</Typography>
		</Box>
	);
};
