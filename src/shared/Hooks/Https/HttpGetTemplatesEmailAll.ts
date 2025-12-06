import { useEffect, useState } from "react";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

interface IGetOperatorsAll {
	id: number;
	name: string;
	description: string;
	htmlContent: string;
	createdAt: string;
	updatedAt: string;
}

export const HttpGetTemplatesEmailAll = () => {
	const { handleGetAlert } = useLayoutMainContext();

	const [data, setData] = useState<IGetOperatorsAll[]>([]);

	const [loading, setLoading] = useState(false);

	const [refresh, setRefresh] = useState(0);

	useEffect(() => {
		const handleGet = () => {
			setLoading(true);

			api
				.get(`/templates-emails/all`)
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
