import { ReactNode } from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

type IBtnPerson = {
	onClick: () => void;
	disabled?: boolean;
	active?: boolean;
	icon: ReactNode;
	title: string;
};

export const ButtonEditDelete = ({
	disabled,
	onClick,
	active,
	title,
	icon,
}: IBtnPerson) => {
	return (
		<Tooltip title={title}>
			<Button
				disabled={disabled}
				sx={{
					backgroundColor: "#F1F3F6",
					background: active ? "#3980f5" : "",
					border: (theme) => `0.8px solid ${theme.palette.grey[500]}`,
					color: "#3b3b3b",
					borderRadius: "8px",
					minWidth: "25px",
					fontSize: "1rem",
					margin: ".2rem .3rem",
					padding: "3px",
					"&:hover": {
						backgroundColor: "#3980f5",
						opacity: 0.9,
					},
				}}
				onClick={onClick}
			>
				{icon}
			</Button>
		</Tooltip>
	);
};
