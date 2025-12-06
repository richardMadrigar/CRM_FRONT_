import { useState } from "react";
import { useContextCampaign } from "src/Contexts/Campaign/ContextCampaign";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

interface IUseFormCampaign {
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UseFormCampaign = ({ setOpenModal }: IUseFormCampaign) => {
	const { setAttTable, attTable, id } = useConfigPageContext();
	const { valuesInputsCampaign } = useContextCampaign();
	const { handleGetAlert } = useLayoutMainContext();

	const [loading, setLoading] = useState(false);

	const AllDatas = {
		...valuesInputsCampaign,
		groupLeadsId: valuesInputsCampaign.groupLeadsId,
		templateId: valuesInputsCampaign.templateId,
		dateFull: valuesInputsCampaign.dateFull,
		date: valuesInputsCampaign.date,
		hour: valuesInputsCampaign.hour,
	};

	const handleCreate = async () => {
		if (!valuesInputsCampaign.name)
			return handleGetAlert({ message: `Digite um nome para campanha !` });

		setLoading(true);

		return api
			.post("/campaign", AllDatas)
			.then((res) => {
				handleGetAlert({ message: res.data.message });
				setAttTable(!attTable);
				setOpenModal(false);
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			)
			.finally(() => setLoading(false));
	};

	const handleEdit = () => {
		if (!valuesInputsCampaign.name)
			return handleGetAlert({ message: `Digite um nome para campanha !` });

		setLoading(true);

		return api
			.put(`/campaign/${id}`, AllDatas)
			.then((res) => {
				handleGetAlert({ message: res.data.message });
				setAttTable(!attTable);
				setOpenModal(false);
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			)
			.finally(() => setLoading(false));
	};

	const handleSubmit = () => {
		if (id) {
			handleEdit();
		} else {
			handleCreate();
		}
	};

	return { handleSubmit, loading };
};
