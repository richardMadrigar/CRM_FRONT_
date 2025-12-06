import React, { useEffect } from "react";
import { useResetInputs } from "src/Contexts";
import { ModalCore } from "src/Pages/components";

import { UseFormCampaign } from "./Hooks/UseFormCampaign";
import { FormContrato } from "./DadosCampaign";

interface IModalCampaign {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCampaign = ({ openModal, setOpenModal }: IModalCampaign) => {
  const { resetInputs } = useResetInputs();

  const { handleSubmit, loading: loadingSubmit } = UseFormCampaign({
    setOpenModal,
  });

  useEffect(() => {
    if (!openModal) resetInputs();
  }, [openModal]);

  return (
    <ModalCore
      open={openModal}
      setOpen={setOpenModal}
      loadingSubmit={loadingSubmit}
      sxStyle={{ width: { xl: "800px", md: "700px", xs: "90%" } }}
      title="Campanha"
      subTitle="Configure os detalhes da sua campanha de e-mail"
      titleSubmit="Salvar"
      onChange={handleSubmit}
    >
      <FormContrato />
    </ModalCore>
  );
};
