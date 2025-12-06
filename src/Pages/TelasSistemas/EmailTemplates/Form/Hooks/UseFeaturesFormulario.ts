import { useState } from "react";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { useContextEmailTemplates } from "src/Contexts/EmailTemplates/ContextEmailTemplates";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

interface IUseFormEmailTemplates {
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UseFormEmailTemplates = ({
	setOpenModal,
}: IUseFormEmailTemplates) => {
	const { setAttTable, attTable, id } = useConfigPageContext();
	const { valuesInputsEmailTemplate } = useContextEmailTemplates();
	const { handleGetAlert } = useLayoutMainContext();

	const [loading, setLoading] = useState(false);

	const AllDatas = {
		name: valuesInputsEmailTemplate.name,
		htmlContent: valuesInputsEmailTemplate.htmlContent,
		description: valuesInputsEmailTemplate.description,
	};

	const handleCreate = async () => {
		if (!AllDatas.name) return handleGetAlert({ message: `Digite um nome !` });

		if (!AllDatas.htmlContent)
			return handleGetAlert({ message: `Digite o HTML do template !` });

		setLoading(true);

		return api
			.post("/templates-emails", AllDatas)
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
		if (!AllDatas.name)
			return handleGetAlert({ message: `Digite um título !` });

		if (!AllDatas.htmlContent)
			return handleGetAlert({ message: `Digite o HTML do template !` });

		setLoading(true);

		return api
			.put(`/templates-emails/${id}`, AllDatas)
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
