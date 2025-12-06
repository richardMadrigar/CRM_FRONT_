import { FC, ReactNode } from "react";
import { alpha, SxProps, TableRow, Theme } from "@mui/material";

type ITableRowCore = {
	id?: string;
	children: ReactNode;
	sxStyle?: SxProps<Theme>;
};

export const TableRowCore: FC<ITableRowCore> = ({ id, children, sxStyle }) => {
	return (
		<TableRow
			key={id}
			sx={{
				"&:hover": {
					background: (theme) => alpha(theme.palette.text.primary, 0.02),
				},
				...sxStyle,
			}}
		>
			{children}
		</TableRow>
	);
};
