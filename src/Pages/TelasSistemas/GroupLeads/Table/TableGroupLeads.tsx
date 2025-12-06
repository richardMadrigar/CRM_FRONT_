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
  PeopleIcon,
} from "src/Pages/components/Icons/Icons";
import { UseDelete } from "src/Pages/components/ModalDeleteCore/Hooks/UseDelete";
import { ActionPopoverTable } from "src/Pages/components/table/ActionPopover/ActionPopover";
import { FormatDateBR } from "src/shared/Utils/FormatDateBR";

import { UseGetByIdGroupLeads } from "./Hooks/UseGetByIdGroupLeads";
import { useHttpTableGroupLeads } from "./Hooks/useHttpTableGroupLeads";
import { THeadGroupLeads } from "./THead";
import { ModalGroupLeads } from "../Form";
import { ButtonCore } from "src/Pages/components/ButtonCore/ButtonCore";
import { useContextCampaign } from "src/Contexts/Campaign/ContextCampaign";
import { InfoModalGroupLeads } from "../Components/InfoModalGroupLeads";
import { Chip } from "@mui/material";

export const TableGroupLeads = () => {
  const { handleGet } = useHttpTableGroupLeads();

  const { listGroupLeads } = useContextCampaign();

  const { handleGetById } = UseGetByIdGroupLeads();
  const { resetInputs } = useResetInputs();

  const [openModalGroupLeads, setOpenModalGroupLeads] = useState(false);

  const {
    setNameSearch,
    itensPerPage,
    currentPage,
    nameSearch,
    attTable,
    setId,
  } = useConfigPageContext();

  const handleGetIdToEdit = (id: string) => {
    resetInputs();
    setId(id);
    setOpenModalGroupLeads(true);
    handleGetById(id);
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
  } = UseDelete({ url: "/group-leads" });

  return (
    <TableCore
      Modals={
        <>
          <ModalGroupLeads
            openModal={openModalGroupLeads}
            setOpenModal={setOpenModalGroupLeads}
          />

          <ModalDeleteCore
            loading={loadingDelete}
            modalOpen={openModalDelete}
            no="Não, Cancelar"
            titlePrimary="Você deseja excluir da lista ?"
            yes="Sim, Deletar !"
            onClickFalse={() => setOpenModalDelete(false)}
            onClickTrue={handleDelete}
          />
        </>
      }
      THead={<THeadGroupLeads />}
      qtdList={listGroupLeads.length}
      setNameSearch={setNameSearch}
      modalInfo={{
        children: <InfoModalGroupLeads />,
        title: "Tutorial: Grupo de Leads",
      }}
      cardAdd={{
        title: "Todos Grupos Leads",
        buttons: [
          <ButtonCore
            startIcon={<AddIcon />}
            title="Criar Grupo de Leads"
            size="small"
            onClick={() => setOpenModalGroupLeads(true)}
          />,
        ],
      }}
    >
      {Children.toArray(
        listGroupLeads.map((item) => {
          return (
            <TableRowCore>
              <TdCore
                values={
                  <ActionPopoverTable
                    optionsList={[
                      {
                        icon: <EditIcon fontSize="small" />,
                        title: "Editar",
                        background: "warning",
                        onClick: () => {
                          setId(item.id);
                          handleGetIdToEdit(item.id);
                        },
                      },
                      {
                        title: "Excluir",
                        background: "error",
                        onClick: () => {
                          setIdModalDelete(item.id);
                          setOpenModalDelete(true);
                        },
                        icon: <DeleteForeverIcon fontSize="small" />,
                      },
                    ]}
                  />
                }
              />

              <TdCore
                values={item.name}
                textAlign="left"
                subTitle={item.description}
              />

              <TdCore
                values={
                  <Chip
                    icon={
                      <PeopleIcon
                        fontSize="small"
                        color="info"
                        style={{ marginRight: "4px" }}
                      />
                    }
                    label={`${item.countLeads} Leads`}
                    size="small"
                    sx={{
                      p: 2,
                      color: theme => theme.palette.text.primary,
                    }}
                  />
                }
                textAlign="left"
              />

              <TdCore textAlign="left" values={FormatDateBR(item.createdAt)} />
            </TableRowCore>
          );
        }),
      )}
    </TableCore>
  );
};
