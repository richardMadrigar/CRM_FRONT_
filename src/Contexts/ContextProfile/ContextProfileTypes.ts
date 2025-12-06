import { SetStateAction as Action, Dispatch } from "react";

export type IEditPerfil = {
	nome: string | undefined;
	telefone_1: string | undefined;
};

export type IUpdateEmailProfile = {
	email: string | undefined;
};

export type IUpdatePasswordProfile = {
	password_currency: string | undefined;
	password_new: string | undefined;
	password_new_repeat: string | undefined;
};

export type IUpdateProfile = {
	email: string;
	name: string;
	phone1: string;
};

export interface IContextProfileContext {
	setValuesEditPerfil: Dispatch<Action<IEditPerfil>>;
	valuesEditPerfil: IEditPerfil;

	setValuesUpdateEmailProfile: Dispatch<Action<IUpdateEmailProfile>>;
	valuesUpdateEmailProfile: IUpdateEmailProfile;

	setValuesUpdatePasswordProfile: Dispatch<Action<IUpdatePasswordProfile>>;
	valuesUpdatePasswordProfile: IUpdatePasswordProfile;

	setValuesUpdateProfile: Dispatch<Action<IUpdateProfile>>;
	valuesUpdateProfile: IUpdateProfile;
}
