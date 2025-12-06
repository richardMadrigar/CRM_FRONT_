import { useEffect } from "react";
import { Pagination } from "@mui/material";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";

type IPaginationTables = { qtdRegister: number };

export const PaginationTables = ({ qtdRegister }: IPaginationTables) => {
	const { itensPerPage, setCurrentPage, nameSearch } = useConfigPageContext();

	const qtdPages = Math.ceil(qtdRegister / itensPerPage);

	useEffect(() => {
		setCurrentPage(1);
	}, [nameSearch, itensPerPage]);
	// quando colocar o search no context colocar o search no useEffect

	return (
		<div style={{ display: "flex", padding: "8px 0", marginRight: "12px" }}>
			<Pagination
				count={qtdPages}
				onChange={(e, a) => setCurrentPage(a)}
				color="primary"
			/>
		</div>
	);
};
