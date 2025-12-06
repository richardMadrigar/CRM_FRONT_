import { FC } from "react";
import { Modal, ModalProps } from "@mui/material";

import { ModalContentCore } from "./Components/ModalContentCore";

type IModalWelcome = ModalProps;

export const ModalCoreBase: FC<IModalWelcome> = ({ children, ...props }) => {
	const { sx, ...rest } = props;
	return (
		<Modal {...rest}>
			<ModalContentCore sx={{ ...sx }}>{children}</ModalContentCore>
		</Modal>
	);
};
