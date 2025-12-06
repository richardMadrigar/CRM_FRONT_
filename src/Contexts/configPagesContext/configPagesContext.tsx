import {
	createContext,
	useContext,
	useEffect,
	useState,
	FC,
	ReactNode,
} from "react";

import { IConfigPagesContext } from "./configPagesTypes";

const ConfigPageProvider = createContext({} as IConfigPagesContext);

const ConfigPageProviderContext: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [id, setId] = useState("");

	const [qtdRegisters, setQtdRegisters] = useState<number>(0);
	const [loadingTable, setLoadingTable] = useState(false);
	const [modalDelete, setModalDelete] = useState(false);
	const [itensPerPage, setItensPerPage] = useState(8);
	const [currentPage, setCurrentPage] = useState(1);
	const [attTable, setAttTable] = useState(false);

	const [loadingGravar, setLoadingGravar] = useState(false);
	const [nameSearch, setNameSearch] = useState("");

	useEffect(() => setCurrentPage(1), [itensPerPage]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setAttTable((item) => !item);
		}, 1000 * 60); // 1 minuto

		return () => clearTimeout(timer);
	}, [attTable]);

	return (
		<ConfigPageProvider.Provider
			value={{
				setQtdRegisters,
				setLoadingGravar,
				setItensPerPage,
				setLoadingTable,
				setCurrentPage,
				setModalDelete,
				loadingGravar,
				qtdRegisters,
				loadingTable,
				setNameSearch,
				itensPerPage,
				currentPage,
				setAttTable,
				modalDelete,
				nameSearch,
				attTable,
				setId,
				id,
			}}
		>
			{children}
		</ConfigPageProvider.Provider>
	);
};

const useConfigPageContext = (): IConfigPagesContext => {
	return useContext(ConfigPageProvider);
};

export { useConfigPageContext, ConfigPageProviderContext };
