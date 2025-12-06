import { useState } from "react";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

interface IMetricsConnections {
	countSentMessagesToday: number;
	countSentMessagesThisMonth: number;
	countSavedContacts: number;
}

export const UseGetMetricsConnections = () => {
	const [data, setData] = useState<IMetricsConnections | null>(null);

	const { handleGetAlert } = useLayoutMainContext();

	const handleGet = async () => {
		await api
			.get(`/messages/metrics`)
			.then((res) => {
				setData(res.data.metrics);
			})
			.catch((error) => {
				handleGetAlert({ message: error.response.data.message });
			});
	};
	return {
		handleGet,
		data,
	};
};
