import { useEffect, useState } from "react";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

interface IGetGroupsLeadsAll {
	id: number;
	name: string;
	description: string;
	countLeads: number;
}

export const HttpGetGroupLeadsAll = () => {
	const { handleGetAlert } = useLayoutMainContext();

	const [data, setData] = useState<IGetGroupsLeadsAll[]>([]);

	const [loading, setLoading] = useState(false);
	const [refresh, setRefresh] = useState(0);

	useEffect(() => {
		const handleGet = () => {
			setLoading(true);

			api
				.get(`/group-leads/all`)
				.then(({ data }) => {
					setData(data.data);
				})
				.catch((error) =>
					handleGetAlert({ message: error.response.data.message }),
				)
				.finally(() => setLoading(false));
		};

		handleGet();
	}, [refresh]);

	return { loading, data, setRefresh };
};
