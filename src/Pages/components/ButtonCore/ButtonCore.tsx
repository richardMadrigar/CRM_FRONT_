import { FC } from "react";
import { Button } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";

type IButtonCore = ButtonProps & {
	title?: string | undefined;
};

export const ButtonCore: FC<IButtonCore> = ({
	title,
	onClick,
	...props
}: IButtonCore) => {
	return (
		<Button
			variant="contained"
			onClick={onClick}
			sx={{ letterSpacing: ".8px" }}
			{...props}
		>
			{title}
		</Button>
	);
};
