import { useState } from "react";
import { useContextContacts } from "src/Contexts/Contacts/ContextContacts";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";
import { useResetInputs } from "src/Contexts";
import { apenasNumeros } from "src/shared/Utils/FormatMoney";

interface IUseFormContacts {
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UseFormContacts = ({ setOpenModal }: IUseFormContacts) => {
	const { valuesInputsContacts } = useContextContacts();
	const { setAttTable, id } = useConfigPageContext();
	const { handleGetAlert } = useLayoutMainContext();
	const { resetInputs } = useResetInputs();

	const [loading, setLoading] = useState(false);

	const { name, phone1, phone2, phone3, ...restData } = valuesInputsContacts;

	const dataCreate = {
		name,

		...restData,

		phone1: apenasNumeros(phone1) || "",
		phone2: apenasNumeros(phone2) || "",
		phone3: apenasNumeros(phone3) || "",

		cpf: apenasNumeros(valuesInputsContacts.cpf) || "",
		cnpj: apenasNumeros(valuesInputsContacts.cnpj) || "",

		companySize: valuesInputsContacts.companySize || "",
		reasonLoss: valuesInputsContacts.reasonLoss || "",
		foundedAt: valuesInputsContacts.foundedAt || "",

		website: valuesInputsContacts.website || undefined,
		instagram: valuesInputsContacts.instagram || "",

		state: valuesInputsContacts.state || "",
		city: valuesInputsContacts.city || "",
		street: valuesInputsContacts.street || "",
		number: valuesInputsContacts.number || "",
		zipCode: valuesInputsContacts.zipCode || "",
	};

	const handleCreate = async () => {
		setLoading(true);

		return api
			.post("/leads", { ...dataCreate })
			.then((res) => {
				handleGetAlert({ message: res.data.message });
				setAttTable((item) => !item);
				setOpenModal(false);
				resetInputs();
			})
			.catch((error) =>
				handleGetAlert({ message: error.response.data.message }),
			)
			.finally(() => setLoading(false));
	};

	const handleEdit = async () => {
		setLoading(true);

		return api
			.put(`/leads/${id}`, { ...dataCreate })
			.then((res) => {
				handleGetAlert({ message: res.data.message });
				setAttTable((item) => !item);
				setOpenModal(false);
				// resetInputs();
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
