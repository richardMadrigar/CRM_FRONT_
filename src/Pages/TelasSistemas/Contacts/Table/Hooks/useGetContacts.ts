import { useContextContacts } from "src/Contexts/Contacts/ContextContacts";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

export const useGetContacts = () => {
	const { setListContacts } = useContextContacts();
	const { handleGetAlert } = useLayoutMainContext();

	const {
		setQtdRegisters,
		setLoadingTable,
		itensPerPage,
		currentPage,
		nameSearch,
	} = useConfigPageContext();

	const handleGet = async () => {
		setLoadingTable(true);

		return api
			.get(
				`/leads?page=${currentPage}&pageSize=${itensPerPage}&filter=${nameSearch}`,
			)
			.then((res) => {
				setListContacts(res.data.data);
				setQtdRegisters(res.data.meta.total);
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			)
			.finally(() => setLoadingTable(false));
	};

	return { handleGet };
};
