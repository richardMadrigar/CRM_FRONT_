import { useState } from "react";
import { useContextCampaign } from "src/Contexts/Campaign/ContextCampaign";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

export const UseGetCampaignDetails = () => {
	const { setDataGetCampaignDetails } = useContextCampaign();
	const { handleGetAlert } = useLayoutMainContext();

	const [loading, setLoading] = useState(false);

	const handleGet = (id: string) => {
		setLoading(true);

		api
			.get(`/campaign/${id}`)
			.then((result) => {
				setDataGetCampaignDetails(result.data);
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			);
	};

	return { loading, handleGet };
};
