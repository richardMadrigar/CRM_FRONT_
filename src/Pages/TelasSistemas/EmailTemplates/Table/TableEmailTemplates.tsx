import { Children, useEffect, useState } from "react";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { useResetInputs } from "src/Contexts/hooks/useResetInputs";
import {
  ModalDeleteCore,
  TableRowCore,
  TableCore,
  TdCore,
} from "src/Pages/components";
import {
  AddIcon,
  EditIcon,
  DeleteForeverIcon,
  EmailIcon,
} from "src/Pages/components/Icons/Icons";
import { UseDelete } from "src/Pages/components/ModalDeleteCore/Hooks/UseDelete";
import { ActionPopoverTable } from "src/Pages/components/table/ActionPopover/ActionPopover";
import { FormatDateBR } from "src/shared/Utils/FormatDateBR";

import { UseGetByIdEmailTemplates } from "./Hooks/UseGetByIdEmailTemplates";
import { useHttpTableEmailTemplates } from "./Hooks/useHttpTableEmailTemplates";
import { THeadEmailTemplates } from "./THead";
import { ModalEmailTemplates } from "../Form";
import { ButtonCore } from "src/Pages/components/ButtonCore/ButtonCore";
import { useContextEmailTemplates } from "src/Contexts/EmailTemplates/ContextEmailTemplates";
import { ModalFormContacts } from "../../Contacts/Table/Components/FormCreate";
import { ModalCoreBase } from "src/Pages/components/ModalCoreBase/ModalCoreBase";
import { CardCore } from "src/Pages/components/CardCore/CardCore";
import { IListEmailTemplate } from "src/Contexts/EmailTemplates/EmailTemplatesContextTypes";

export const TableEmailTemplates = () => {
  const { handleGet } = useHttpTableEmailTemplates();

  const { listEmailTemplates, setValuesInputsEmailTemplate } =
    useContextEmailTemplates();

  const { handleGetById } = UseGetByIdEmailTemplates();
  const { resetInputs } = useResetInputs();

  const [openModalEmailTemplates, setOpenModalEmailTemplates] = useState(false);
  const [openModalEmailTemplatesView, setOpenModalEmailTemplatesView] =
    useState(false);
  const [htmlContent, setHtmlContent] = useState("");

  const {
    setNameSearch,
    itensPerPage,
    currentPage,
    nameSearch,
    attTable,
    setId,
  } = useConfigPageContext();

  const handleGetIdToEdit = (id: string, item: IListEmailTemplate) => {
    setId(id);
    setOpenModalEmailTemplates(true);
    setValuesInputsEmailTemplate(item);
  };

  useEffect(() => {
    handleGet();
  }, [attTable, itensPerPage, currentPage, nameSearch]);

  const {
    handleDelete,
    open: openModalDelete,
    loading: loadingDelete,
    setId: setIdModalDelete,
    setOpen: setOpenModalDelete,
  } = UseDelete({ url: "/templates-emails" });

  return (
    <>
      <TableCore
        setNameSearch={setNameSearch}
        qtdList={listEmailTemplates.length}
        heightTable="420px"
        Modals={
          <>
            <ModalEmailTemplates
              openModal={openModalEmailTemplates}
              setOpenModal={setOpenModalEmailTemplates}
            />
            <ModalDeleteCore
              modalOpen={openModalDelete}
              loading={loadingDelete}
              onClickTrue={handleDelete}
              onClickFalse={() => setOpenModalDelete(false)}
              titlePrimary="Excluir Template"
              titleSecondary="Tem certeza que deseja excluir o template?"
              yes="Excluir"
              no="Cancelar"
            />
            <ModalCoreBase
              open={openModalEmailTemplatesView}
              onClose={() => setOpenModalEmailTemplatesView(false)}
            >
              <CardCore sxStyle={{ maxHeight: "600px", overflow: "auto", p: 5 }}>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} style={{ margin: 12 }} />
              </CardCore>
            </ModalCoreBase>
          </>
        }
        THead={<THeadEmailTemplates />}
        cardAdd={{
          title: "Templates de Email",
          buttons: [
            <ButtonCore
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setOpenModalEmailTemplates(true)}
              title="Adicionar Template"
            />,
          ],
        }}
      >
        {Children.toArray(
          listEmailTemplates.map((item) => {
            return (
              <TableRowCore id={String(item.id)}>
                <TdCore
                  values={
                    <ActionPopoverTable
                      optionsList={[
                        {
                          icon: <EditIcon fontSize="small" />,
                          title: "Editar",
                          onClick: () => {
                            handleGetIdToEdit(item.id, item);
                          },
                        },
                        {
                          icon: <DeleteForeverIcon fontSize="small" />,
                          title: "Excluir",
                          onClick: () => {
                            setIdModalDelete(item.id);
                            setOpenModalDelete(true);
                          },
                        },
                      ]}
                    />
                  }
                />

                <TdCore
                  textAlign="left"
                  values={
                    <ButtonCore
                      variant="outlined"
                      onClick={() => [
                        setHtmlContent(item.htmlContent),
                        setOpenModalEmailTemplatesView(true),
                      ]}
                      // onMouseLeave={() => {
                      //   setOpenModalEmailTemplatesView(false),
                      //     setHtmlContent("")
                      // }}
                      title="Visualizar Template"
                    >
                      Ver
                    </ButtonCore>
                  }
                />
                <TdCore textAlign="left" values={item.name} />
                <TdCore
                  textAlign="left"
                  values={FormatDateBR(item.createdAt)}
                />
              </TableRowCore>
            );
          }),
        )}
      </TableCore>
    </>
  );
};
