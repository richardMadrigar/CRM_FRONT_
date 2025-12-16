import { SmsOutlined as SmsOutlinedIcon } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Children, useEffect, useState } from "react";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { useContextEmailTemplates } from "src/Contexts/EmailTemplates/ContextEmailTemplates";
import type { IListEmailTemplate } from "src/Contexts/EmailTemplates/EmailTemplatesContextTypes";
import {
  ModalDeleteCore,
  TableCore,
  TableRowCore,
  TdCore,
} from "src/Pages/components";
import { ButtonCore } from "src/Pages/components/ButtonCore/ButtonCore";
import {
  AddIcon,
  DeleteForeverIcon,
  EditIcon,
  EmailIcon,
} from "src/Pages/components/Icons/Icons";
import { UseDelete } from "src/Pages/components/ModalDeleteCore/Hooks/UseDelete";
import { ActionPopoverTable } from "src/Pages/components/table/ActionPopover/ActionPopover";
import { FormatDateBR } from "src/shared/Utils/FormatDateBR";
import { ModalEmailTemplates } from "../Form";
import { useHttpTableEmailTemplates } from "./Hooks/useHttpTableEmailTemplates";
import { THeadEmailTemplates } from "./THead";

export const TableTemplates = () => {
  const { handleGet } = useHttpTableEmailTemplates();

  const { listEmailTemplates, setValuesInputsEmailTemplate } =
    useContextEmailTemplates();

  const [openModalEmailTemplates, setOpenModalEmailTemplates] = useState(false);

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
    <TableCore
      THead={<THeadEmailTemplates />}
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
          {/* <ModalCoreBase
            open={openModalEmailTemplatesView}
            onClose={() => setOpenModalEmailTemplatesView(false)}
          >
            <CardCore sxStyle={{ maxHeight: "600px", overflow: "auto", p: 5 }}>
              <div
                // biome-ignore lint/security/noDangerouslySetInnerHtml: "allow"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                style={{ margin: 12 }}
              />
            </CardCore>
          </ModalCoreBase> */}
        </>
      }
      cardAdd={{
        title: "Templates",
        buttons: [
          <ButtonCore
            key="add-template"
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

              <TdCore textAlign="left" values={item.name} />

              <TdCore
                textAlign="left"
                values={
                  item.type === "EMAIL" ? (
                    <Box display="flex" alignItems="center" gap={1}>
                      <EmailIcon
                        fontSize="small"
                        style={{ verticalAlign: "middle", marginRight: 4 }}
                      />
                      <Typography variant="body2" color="text.primary">
                        Email
                      </Typography>
                    </Box>
                  ) : (
                    <Box display="flex" alignItems="center" gap={1} >
                      <SmsOutlinedIcon
                        fontSize="small"
                        style={{ verticalAlign: "middle", marginRight: 4 }}
                      />
                      <Typography variant="body2" color="text.primary">SMS</Typography>
                    </Box>
                  )
                }
              />
              <TdCore textAlign="right" values={FormatDateBR(item.createdAt)} />
            </TableRowCore>
          );
        }),
      )}
    </TableCore>
  );
};
