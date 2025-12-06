import * as React from "react";
import { BoxProps, Divider, Fade, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { useAppThemeContext } from "src/Contexts/ThemeContextConfig";

import { FormCore } from "../AppFormComponents/FormCore";
import { CloseIcon } from "../Icons/Icons";

import { ButtonsHeaderFormFilter } from "./Components/ButtonsHeaderFormFilter";
import { ButtonSubmitFormFilter } from "./Components/ButtonSubmitFormFilter";

export const useStyles = makeStyles({
	customScrollbar: {
		"&::-webkit-scrollbar": {
			width: "5px",
		},
		"&::-webkit-scrollbar-thumb": {
			backgroundColor: "#d4d4d4c3",
			borderRadius: "8px",
		},
		"&::-webkit-scrollbar-thumb:hover": {
			backgroundColor: "#d8d8d8",
		},
		"&::-webkit-scrollbar-track": {
			backgroundColor: "transparent",
		},
	},
});

const style = {
	position: "fixed",
	top: "0",
	right: "0",
	overflow: "auto",
	maxHeight: "100%",
};

type IModalFilterCore = BoxProps & {
	children: React.ReactNode;
	FilterClear: () => Promise<void>;
	FilterSearch: () => Promise<void>;
};

export const ModalFilterCore = ({
	children,
	FilterClear,
	FilterSearch,
}: IModalFilterCore) => {
	const { themeName } = useAppThemeContext();

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const classes = useStyles();

	return (
		<>
			<ButtonsHeaderFormFilter
				FilterClear={FilterClear}
				handleOpen={handleOpen}
			/>

			<Modal
				closeAfterTransition
				aria-describedby="modal-modal-description"
				aria-labelledby="modal-modal-title"
				open={open}
				onClose={handleClose}
			>
				<Fade in={open}>
					<Box
						sx={{
							...style,
							background: themeName === "dark" ? "#353741" : "#fff",
							borderRadius: "12px",
							margin: "16px",
							padding: { xs: "10px", sm: "16px" },
							height: { sx: "calc(100% - 64px)", md: "calc(100% - 32px)" },
							width: { xs: "calc(100% - 48px)", sm: "450px" },
						}}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: "1rem",
							}}
						>
							<Typography component="h2" id="modal-modal-title" variant="h6">
								FILTROS
							</Typography>

							<IconButton aria-label="delete" onClick={handleClose}>
								<CloseIcon />
							</IconButton>
						</Box>
						<Divider />

						<FormCore sxStyle={{ margin: "0" }}>
							<Box
								className={classes.customScrollbar}
								sx={{
									overflow: "auto",
									minHeight: `calc(100vh - 195px)`,
									maxHeight: {
										xs: `calc(100vh - 195px)`,
									},
								}}
							>
								<Box
									sx={{
										padding: { xs: "8px 8px 0 4px", md: "8px 14px 0 4px" },
									}}
								>
									{children}
								</Box>
							</Box>

							<Divider sx={{ marginBottom: "2rem" }} />

							<ButtonSubmitFormFilter
								FilterClear={FilterClear}
								FilterSearch={FilterSearch}
							/>
						</FormCore>
					</Box>
				</Fade>
			</Modal>
		</>
	);
};
