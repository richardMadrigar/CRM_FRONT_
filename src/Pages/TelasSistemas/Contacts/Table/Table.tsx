import { Children, useEffect, useState } from "react";

import { useConfigPageContext } from "src/Contexts/configPagesContext/configPagesContext";
import { ModalDeleteCore, TableCore, TdCore } from "src/Pages/components";
import {
	DeleteForeverIcon,
	EditIcon,
	Visibility,
} from "src/Pages/components/Icons/Icons";
import { TableRowCore } from "src/Pages/components/table/@Core/TableRowCore/TableRowCore";
import { ActionPopoverTable } from "src/Pages/components/table/ActionPopover/ActionPopover";

import { THeadContacts } from "./THead";

import { FormatDateBR } from "src/shared/Utils/FormatDateBR";
import { RotatingCachedIcon } from "src/Pages/components/Icons/RotatingCachedIcon";

import { useGetContacts } from "./Hooks/useGetContacts";
import { ModalFormContacts } from "./Components/FormCreate";
import { ModalInfoCore } from "src/Pages/components/ModalInfo/ModalInfo";
import { InfoModalContacts } from "./Components/InfoModalContacts";

import { formatString } from "@format-string/core";
import { useContextContacts } from "src/Contexts/Contacts/ContextContacts";
import { ButtonCore } from "src/Pages/components/ButtonCore/ButtonCore";
import { UseDelete } from "src/Pages/components/ModalDeleteCore/Hooks/UseDelete";
import { IListContacts } from "src/Contexts/Contacts/ContextContactsTypes";
import {
	OBjLeadsInterestLevel,
	objLeadsSourceCollection,
	objLeadsStatus,
	objLeadsTypeCompany,
} from "src/Pages/components/ObjTransform";
import { alpha, Chip } from "@mui/material";
import { handleFormatDateIfIsNull } from "src/shared/Utils/handleFormatDateIfIsNull";
import { cpfOurCnpj } from "src/shared/Utils/MaskCpfCnpj";
import { useNavigate } from "react-router-dom";

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
			foundedAt: handleFormatDateIfIsNull(item.foundedAt),
			dateCapture: handleFormatDateIfIsNull(item.dateCapture),
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
								textAlign="center"
								values={objLeadsTypeCompany[item.typeCompany] || "-"}
							/>
							<TdCore textAlign="center" values={objLeadsStatus[item.status]} />
							<TdCore
								textAlign="center"
								values={
									<Chip
										label={OBjLeadsInterestLevel[item.interestLevel].title}
										size="small"
										sx={{
											backgroundColor: alpha(
												OBjLeadsInterestLevel[item.interestLevel].color,
												0.8,
											),
											color: "#fff",
											padding: "4px 8px",
										}}
									/>
								}
							/>
							<TdCore
								textAlign="left"
								values={
									objLeadsSourceCollection[item.sourceCollection] ||
									"Não informado"
								}
								subTitle={`Capturado em: ${FormatDateBR(item.dateCapture)}`}
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
