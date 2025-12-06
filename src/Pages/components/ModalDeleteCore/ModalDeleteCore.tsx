import { Modal, Box } from "@mui/material";

import { ButtonsModal } from "./Components/ButttonsModal";
import { ContentModal } from "./Components/ContentModal";
import { IModalDeleteCore } from "./types";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 600,
	maxWidth: "90%",
	bgcolor: "background.paper",
	borderRadius: 2,
	p: 3,
};

export const ModalDeleteCore = ({
	titleSecondary,
	titlePrimary,
	onClickFalse,
	onClickTrue,
	modalOpen,
	loading,
	yes,
	no,
}: IModalDeleteCore) => {
	return (
		<Modal
			aria-describedby="modal-modal-description"
			aria-labelledby="modal-modal-title"
			open={modalOpen}
		>
			<Box sx={style}>
				<ContentModal
					titlePrimary={titlePrimary}
					titleSecondary={titleSecondary}
				/>

				<ButtonsModal
					loading={loading}
					no={no}
					yes={yes}
					onClickFalse={onClickFalse}
					onClickTrue={onClickTrue}
				/>
			</Box>
		</Modal>
	);
};
