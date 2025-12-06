import { Box, Button, CircularProgress, alpha } from "@mui/material";

interface IButtonsModal {
	onClickFalse: () => void;
	onClickTrue: () => void;
	loading?: boolean;
	no: string;
	yes: string;
}
export const ButtonsModal = ({
	no,
	yes,
	loading,
	onClickTrue,
	onClickFalse,
}: IButtonsModal) => {
	return (
		<Box sx={{ textAlign: "right" }}>
			<Button
				disabled={loading}
				sx={{
					marginRight: "12px",
					padding: "9px",
					minWidth: "130px",
				}}
				variant="outlined"
				onClick={onClickFalse}
			>
				{no}
			</Button>

			<Button
				disabled={loading}
				endIcon={
					loading && (
						<CircularProgress size={15} sx={{ mr: 1, color: "white" }} />
					)
				}
				sx={{
					padding: "9px",
					minWidth: "130px",

					color: "#fff",
					background: alpha("#ff0000", 0.6),
					"&:hover": { backgroundColor: alpha("#ff0000", 0.8) },
				}}
				onClick={onClickTrue}
			>
				{yes}
			</Button>
		</Box>
	);
};
