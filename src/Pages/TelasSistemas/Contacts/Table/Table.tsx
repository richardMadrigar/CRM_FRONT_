import { formatString } from "@format-string/core";
import { Children, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContextContacts } from "src/Contexts/Contacts/ContextContacts";
import type { IListContacts } from "src/Contexts/Contacts/ContextContactsTypes";
import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { ModalDeleteCore, TableCore, TdCore } from "src/Pages/components";
import { ButtonCore } from "src/Pages/components/ButtonCore/ButtonCore";
import {
  DeleteForeverIcon,
  EditIcon,
  Visibility,
} from "src/Pages/components/Icons/Icons";
import { RotatingCachedIcon } from "src/Pages/components/Icons/RotatingCachedIcon";
import { UseDelete } from "src/Pages/components/ModalDeleteCore/Hooks/UseDelete";
import { ModalInfoCore } from "src/Pages/components/ModalInfo/ModalInfo";

import { TableRowCore } from "src/Pages/components/table/@Core/TableRowCore/TableRowCore";
import { ActionPopoverTable } from "src/Pages/components/table/ActionPopover/ActionPopover";
import { FormatDateBR } from "src/shared/Utils/FormatDateBR";
import { handleFormatDateIfIsNull } from "src/shared/Utils/handleFormatDateIfIsNull";
import { cpfOurCnpj } from "src/shared/Utils/MaskCpfCnpj";
import { ModalFormContacts } from "./Components/FormCreate";
import { InfoModalContacts } from "./Components/InfoModalContacts";
import { useGetContacts } from "./Hooks/useGetContacts";
import { THeadContacts } from "./THead";

export const TableContacts = () => {
  const {
    setNameSearch,
    itensPerPage,
    currentPage,
    loadingTable,
    nameSearch,
    setAttTable,
    attTable,
    setId,
  } = useConfigPageContext();

  const navigate = useNavigate();

  const { handleGet } = useGetContacts();
  const { listContacts, setValuesInputsContacts } = useContextContacts();

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    handleGet();
  }, [attTable, itensPerPage, currentPage, nameSearch]);

  const handleGetIdToEdit = (id: string, item: IListContacts) => {
    setId(id);
    setOpenModal(true);
    setValuesInputsContacts({
      ...item,
      phone1: formatString({ type: "phone", value: item.phone1 }) || "",
      phone2: formatString({ type: "phone", value: item.phone2 }) || "",
      phone3: formatString({ type: "phone", value: item.phone3 }) || "",
      cpf: cpfOurCnpj({ text: item.cpf || "", type: "cpf" }),
      cnpj: cpfOurCnpj({ text: item.cnpj || "", type: "cnpj" }),
      dateCapture: handleFormatDateIfIsNull(item.dateCapture),
      country: item.country || "",
    });
  };

  const {
    handleDelete,
    open: openModalDelete,
    loading: loadingDelete,
    setId: setIdModalDelete,
    setOpen: setOpenModalDelete,
  } = UseDelete({ url: "/leads" });

  return (
    <TableCore
      setNameSearch={setNameSearch}
      qtdList={listContacts.length}
      heightTable="420px"
      THead={<THeadContacts />}
      Modals={
        <>
          <ModalFormContacts
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
          <ModalDeleteCore
            modalOpen={openModalDelete}
            loading={loadingDelete}
            onClickTrue={handleDelete}
            onClickFalse={() => setOpenModalDelete(false)}
            titlePrimary="Excluir Contato"
            titleSecondary="Tem certeza que deseja excluir o contato?"
            yes="Excluir"
            no="Cancelar"
          />
        </>
      }
      cardAdd={{
        title: "Contatos",
        buttons: [
          <RotatingCachedIcon
            onClick={() => setAttTable((item) => !item)}
            isLoading={loadingTable}
            tooltipTitle="Recarregar a página"
          />,

          <ModalInfoCore title="Tutorial: Conexão do WhatsApp">
            <InfoModalContacts />
          </ModalInfoCore>,
          <ButtonCore
            title="Adicionar Contato"
            onClick={() => setOpenModal(true)}
          />,
        ],
      }}
    >
      {Children.toArray(
        listContacts.map((item) => {
          return (
            <TableRowCore id={String(item.id)}>
              <TdCore
                values={
                  <ActionPopoverTable
                    optionsList={[
                      {
                        icon: <Visibility fontSize="small" />,
                        title: "Ver Detalhes",
                        onClick: () => {
                          navigate(`/contacts/${item.id}`);
                        },
                      },
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
                values={item.name}
                subTitle={item.email}
              />

              <TdCore
                textAlign="left"
                values={formatString({
                  type: "phone",
                  value: item.phone1,
                })}
                subTitle={formatString({
                  type: "phone",
                  value: item.phone2,
                })}
              />

              <TdCore
                textAlign="left"
                values={FormatDateBR(item.createdAt)}
                subTitle={`Editado em: ${FormatDateBR(item.updatedAt)}`}
              />
            </TableRowCore>
          );
        }),
      )}
    </TableCore>
  );
};
