import { forwardRef } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { useTheme } from "@mui/material";

const Alert = forwardRef<HTMLDivElement, AlertProps>(
	function Alert(props, ref) {
		return <MuiAlert ref={ref} elevation={16} variant="filled" {...props} />;
	},
);

export const AlertCompSnackbar = () => {
	const { openAlert, setOPenAlert, messageAlert, statusAlert } =
		useLayoutMainContext();

	const theme = useTheme();

	const isErrorAlert = statusAlert === "500" || messageAlert === undefined;

	const handleClose = () => setOPenAlert(false);

	return (
		<Snackbar
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			autoHideDuration={10000}
			open={openAlert}
			sx={{ marginTop: "3rem" }}
			onClose={handleClose}
		>
			<Alert
				sx={{
					width: "100%",
					color: "white",
					background: !isErrorAlert
						? theme.palette.primary.main
						: (theme) => theme.palette.warning.dark,
				}}
				onClose={() => setOPenAlert(false)}
			>
				{messageAlert || "O alerta não encontrou nenhuma mensagem!"}
			</Alert>
		</Snackbar>
	);
};
