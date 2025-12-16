import { createRef, useEffect } from "react";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { useContextEmailTemplates } from "src/Contexts/EmailTemplates/ContextEmailTemplates";
import { valuesDefaultInputsEmailTemplate } from "src/Contexts/EmailTemplates/ValuesDefaultInputsEmailTemplate/valuesDefaultInputsEmailTemplate";
import { ModalCore } from "src/Pages/components";
import { FormDados } from "./FormDados";
import { UseFormEmailTemplates } from "./Hooks/UseFeaturesFormulario";

interface IModalEmailTemplates {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalEmailTemplates = ({
  openModal,
  setOpenModal,
}: IModalEmailTemplates) => {
  const { setValuesInputsEmailTemplate } = useContextEmailTemplates();
  const { setId } = useConfigPageContext();

  const { handleSubmit, loading: loadingSubmit } = UseFormEmailTemplates({
    setOpenModal,
  });

  useEffect(() => {
    if (!openModal) {
      setId("");
      setValuesInputsEmailTemplate(valuesDefaultInputsEmailTemplate);
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
        width: { xl: "1000px", md: "600", xs: "75%" },
      }}
      title="Template de Email"
      titleSubmit="Salvar"
      onChange={handleSubmit}
    >
      <FormDados inputRef={inputRef} />
    </ModalCore>
  );
};
