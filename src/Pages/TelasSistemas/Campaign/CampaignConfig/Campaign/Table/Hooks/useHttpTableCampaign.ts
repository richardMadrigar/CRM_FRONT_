import { useContextCampaign } from "src/Contexts/Campaign/ContextCampaign";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

export const useHttpTableCampaign = () => {
	const { setListCampaign } = useContextCampaign();
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
				`/campaign?page=${currentPage}&pageSize=${itensPerPage}&filter=${nameSearch}`,
			)
			.then((res) => {
				setListCampaign(res.data.data);
				setQtdRegisters(res.data.meta.total);
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			)
			.finally(() => setLoadingTable(false));
	};

	return { handleGet };
};
