import React, { useEffect } from "react";
import { ModalCore } from "src/Pages/components";

import { FormCreateContacts } from "./FormCreate";
import { UseFormContacts } from "./hook/UseFormContacts";
import { useContextContacts } from "src/Contexts/Contacts/ContextContacts";
import { valuesDefaultInputsContacts } from "src/Contexts/Contacts/ValuesDefaultInputsConnectionWhats/valuesDefaultInputsContextContacts";

interface IModal {
	openModal: boolean;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalFormContacts = ({ openModal, setOpenModal }: IModal) => {
	const { setValuesInputsContacts } = useContextContacts();

	const { handleSubmit, loading: loadingSubmit } = UseFormContacts({
		setOpenModal,
	});

	useEffect(() => {
		if (!openModal) {
			setValuesInputsContacts(valuesDefaultInputsContacts);
		}
	}, [openModal]);

	return (
		<ModalCore
			open={openModal}
			setOpen={setOpenModal}
			loadingSubmit={loadingSubmit}
			sxStyle={{ width: "900px" }}
			title="Adicionar Contato"
			titleSubmit="Salvar"
			onChange={handleSubmit}
			subTitle="Preencha as informações do novo lead"
		>
			<FormCreateContacts />
		</ModalCore>
	);
};
