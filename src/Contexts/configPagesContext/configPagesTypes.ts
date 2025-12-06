import { SetStateAction as Action, Dispatch } from "react";

export interface IConfigPagesContext {
	setId: Dispatch<Action<string>>;
	id: string;

	setLoadingTable: Dispatch<Action<boolean>>;
	loadingTable: boolean;
	setAttTable: Dispatch<Action<boolean>>;
	attTable: boolean;
	setModalDelete: Dispatch<Action<boolean>>;
	modalDelete: boolean;
	setQtdRegisters: Dispatch<Action<number>>;
	qtdRegisters: number;
	setItensPerPage: Dispatch<Action<number>>;
	itensPerPage: number;
	setCurrentPage: Dispatch<Action<number>>;
	currentPage: number;

	setLoadingGravar: Dispatch<Action<boolean>>;
	loadingGravar: boolean;

	setNameSearch: Dispatch<Action<string>>;
	nameSearch: string;
}
