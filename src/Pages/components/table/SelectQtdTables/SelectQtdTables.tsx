import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";

type ISelectTables = { qtd_Itens: number };

export const SelectQtdTables = ({ qtd_Itens }: ISelectTables) => {
	const { itensPerPage, setItensPerPage } = useConfigPageContext();

	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<Typography sx={{ fontSize: ".8rem" }}>Exibindo</Typography>
			<FormControl size="small" sx={{ margin: "0 8px" }}>
				<Select
					value={itensPerPage}
					onChange={(e) => setItensPerPage(Number(e.target.value))}
				>
					<MenuItem value="8"> 8 </MenuItem>
					<MenuItem value="15"> 15 </MenuItem>
					<MenuItem value="20"> 20 </MenuItem>
				</Select>
			</FormControl>

			<Typography sx={{ fontSize: ".8rem" }}>
				de {qtd_Itens} registros
			</Typography>
		</div>
	);
};
