import { useContextEmailTemplates } from "src/Contexts/EmailTemplates/ContextEmailTemplates";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

export const useHttpTableEmailTemplates = () => {
	const { setListEmailTemplates } = useContextEmailTemplates();
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
				`/templates-emails?page=${currentPage}&pageSize=${itensPerPage}&filter=${nameSearch}`,
			)
			.then((res) => {
				setListEmailTemplates(res.data.data);
				setQtdRegisters(res.data.meta.total);
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			)
			.finally(() => setLoadingTable(false));
	};

	return { handleGet };
};
