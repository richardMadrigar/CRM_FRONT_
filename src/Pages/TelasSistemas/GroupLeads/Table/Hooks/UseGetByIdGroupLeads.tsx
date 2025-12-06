import { useContextCampaign } from "src/Contexts/Campaign/ContextCampaign";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

export const UseGetByIdGroupLeads = () => {
	const { handleGetAlert } = useLayoutMainContext();

	const { setValuesInputsGroupLeads } = useContextCampaign();

	const handleGetById = async (id: string) => {
		await api
			.get(`/group-leads/${id}`)
			.then(({ data }) => {
				setValuesInputsGroupLeads({
					description: data.description,
					name: data.name,
					leads: data.leads,
				});
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			);
	};

	return { handleGetById };
};
