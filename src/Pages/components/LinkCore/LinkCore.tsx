import { useTheme } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ILinkCore {
	isDisabled?: boolean;
	color?: string;
	to: string;
	target?: React.HTMLAttributeAnchorTarget | undefined;
	children: ReactNode;
}

export const LinkCore: FC<ILinkCore> = ({
	isDisabled,
	children,
	target,
	color,
	to,
}) => {
	const theme = useTheme();
	if (isDisabled) {
		return <span>{children}</span>;
	}

	return (
		<Link
			style={{
				outline: "none",
				textDecoration: "none",
				color: color || theme.palette.text.primary,
			}}
			target={target}
			to={to}
		>
			{children}
		</Link>
	);
};
