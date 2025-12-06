import { useState } from "react";
import { useContextConnectionWhats } from "src/Contexts/ConnectionWhats/ContextConnectionWhats";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

export const useGetByIdConnection = () => {
	const { setDataGetConnectionWhats } = useContextConnectionWhats();
	const { handleGetAlert } = useLayoutMainContext();

	const [loadingTable, setLoadingTable] = useState(false);

	const handleGet = async (id: string) => {
		setLoadingTable(true);

		return api
			.get(`/connections-whats/${id}`)
			.then((res) => {
				setDataGetConnectionWhats(res.data.data);
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			)
			.finally(() => setLoadingTable(false));
	};

	return { handleGet, loadingTable };
};
