import { useContextEmailTemplates } from "src/Contexts/EmailTemplates/ContextEmailTemplates";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

export const UseGetByIdEmailTemplates = () => {
	const { handleGetAlert } = useLayoutMainContext();

	const { setValuesInputsEmailTemplate } = useContextEmailTemplates();

	const handleGetById = async (id: string) => {
		await api
			.get(`/templates-emails/${id}`)
			.then(({ data }) => {
				setValuesInputsEmailTemplate({
					name: data.name,
					htmlContent: data.htmlContent,
					description: data.description,
				});
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			);
	};

	return { handleGetById };
};
