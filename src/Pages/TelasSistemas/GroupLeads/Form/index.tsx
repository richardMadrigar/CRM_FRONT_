import React, { createRef, useEffect } from "react";
import { ModalCore } from "src/Pages/components";

import { UseFormGroupLeads } from "./Hooks/UseFeaturesFormulario";
import { FormDados } from "./FormDados";
import { FormLeads } from "./FormLeads";
import { useContextCampaign } from "src/Contexts/Campaign/ContextCampaign";
import { valuesDefaultInputsGroupLeads } from "src/Contexts/Campaign/ValuesDefaultInputsCampaign/valuesDefaultInputsInstancesWhats";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";

interface IModalGroupLeads {
	openModal: boolean;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalGroupLeads = ({
	openModal,
	setOpenModal,
}: IModalGroupLeads) => {
	const { setValuesInputsGroupLeads } = useContextCampaign();
	const { setId } = useConfigPageContext();

	const { handleSubmit, loading: loadingSubmit } = UseFormGroupLeads({
		setOpenModal,
	});

	useEffect(() => {
		if (!openModal) {
			setId("");
			setValuesInputsGroupLeads(valuesDefaultInputsGroupLeads);
		}
	}, [openModal]);

	const inputRef = createRef<HTMLInputElement>();

	const handleFocusedID = () => inputRef.current?.focus();

	useEffect(() => {
		handleFocusedID();
	}, []);

	return (
		<ModalCore
			open={openModal}
			setOpen={setOpenModal}
			loadingSubmit={loadingSubmit}
			sxStyle={{
				width: { xl: "1000px", md: "600", xs: "90%" },
			}}
			title="Grupo de leads"
			titleSubmit="Salvar"
			onChange={handleSubmit}
		>
			<FormDados inputRef={inputRef} />
			<FormLeads />
		</ModalCore>
	);
};
