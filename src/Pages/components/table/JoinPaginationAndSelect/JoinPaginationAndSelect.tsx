import { Box, Stack, useTheme } from "@mui/material";

import { PaginationTables } from "../PaginationTables/PaginationTables";
import { SelectQtdTables } from "../SelectQtdTables/SelectQtdTables";

type IPaginationAndSelect = {
	qtd_registros: number;
};

export const JoinPaginationAndSelect = ({
	qtd_registros,
}: IPaginationAndSelect) => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				padding: "8px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				boxShadow: "0px -4px 8px rgba(96, 96, 96, 0.136)",

				[theme.breakpoints.up("md")]: {
					justifyContent: "space-between",
					flexDirection: "row",
				},
			}}
		>
			<Stack
				alignItems="center"
				sx={{
					flexDirection: "row",
					[theme.breakpoints.down("sm")]: {
						flexDirection: "column",
					},
				}}
			>
				<PaginationTables qtdRegister={qtd_registros} />
			</Stack>

			<SelectQtdTables qtd_Itens={qtd_registros} />
		</Box>
	);
};
