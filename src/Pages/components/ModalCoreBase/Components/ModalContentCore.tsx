import { FC } from "react";
import { Box, BoxProps } from "@mui/material";

type IModalContentCore = BoxProps;

export const ModalContentCore: FC<IModalContentCore> = ({
	children,
	...props
}) => {
	return (
		<Box
			sx={{
				position: "absolute" as const,
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				borderRadius: "12px",
				padding: "12px",
				backgroundColor: (theme) => theme.palette.background.default,
				boxShadow: "0px 0px 10px 0px rgba(151, 151, 151, 0.432)",
				overflow: "auto",
				...props.sx,
			}}
		>
			{children}
		</Box>
	);
};
