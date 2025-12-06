import { Children, ReactNode } from "react";
import { Box } from "@mui/material";

interface IHeaderCardCore {
	limitCharacter?: number;
	buttonAdd?: ReactNode[];
}

export const HeaderTable = ({ buttonAdd }: IHeaderCardCore) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				flexWrap: "wrap",
				gap: 2,
			}}
		>
			{Children.toArray(buttonAdd?.map((item) => <Box>{item}</Box>))}
		</Box>
	);
};
