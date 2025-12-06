import React, { useEffect } from "react";
import { ModalCore } from "src/Pages/components";

import { FormCreateInstances } from "./FormCreateInstances";
import { useContextConnectionWhats } from "src/Contexts/ConnectionWhats/ContextConnectionWhats";
import { UseFormInstancesWhats } from "./Hooks/UseFormInstancesWhats";
import { valuesDefaultInputsConnectionWhats } from "src/Contexts/ConnectionWhats/ValuesDefaultInputsConnectionWhats/valuesDefaultInputsConnectionWhats";

interface IModal {
	openModal: boolean;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCampaignNewInstance = ({
	openModal,
	setOpenModal,
}: IModal) => {
	const { setValuesInputsInstancesWhats } = useContextConnectionWhats();

	const { handleSubmit, loading: loadingSubmit } = UseFormInstancesWhats({
		setOpenModal,
	});

	useEffect(() => {
		if (!openModal)
			setValuesInputsInstancesWhats(valuesDefaultInputsConnectionWhats);
	}, [openModal]);

	return (
		<>
			{/* {instanceId && (
        <ModalInstancesWhatsQrCode
          id={instanceId}
          openModal={openQrCodeModal}
          setOpenModal={setOpenQrCodeModal}
        />
      )} */}

			<ModalCore
				open={openModal}
				setOpen={setOpenModal}
				loadingSubmit={loadingSubmit}
				sxStyle={{ width: "550px" }}
				title="Conectar novo whats"
				titleSubmit="Salvar / Gerar QRcode"
				onChange={handleSubmit}
			>
				<FormCreateInstances />
			</ModalCore>
		</>
	);
};
