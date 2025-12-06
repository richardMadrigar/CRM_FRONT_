import { SetStateAction as Action, Dispatch } from "react";

export type IAuthContextType = {
	handleLogin(data: IHandleLogin): Promise<void>;
	RefreshSession: () => Promise<void>;

	setUserPerfil: Dispatch<Action<IUsers | undefined>>;
	userPerfil: IUsers | undefined;

	setAuthorization: Dispatch<Action<boolean>>;
	authorization: boolean;

	setLoadingLogin: Dispatch<Action<boolean>>;
	loadingLogin: boolean;

	setOpenModalFirst: Dispatch<Action<boolean>>;
	openModalFirst: boolean;

	loading: boolean | undefined;
	setToken: Dispatch<Action<TokenState>>;

	setValuesInputsLogins: Dispatch<Action<ILogins>>;
	valuesInputsLogins: ILogins;

	setValuesInputsRegister: Dispatch<Action<ICreateRegister>>;
	valuesInputsRegister: ICreateRegister;

	setValuesRecoverPassword: Dispatch<Action<IRecoverPassword>>;
	valuesRecoverPassword: IRecoverPassword;
};

export interface ICreateRegister {
	email: string | undefined;
	password: string | undefined;
	name: string | undefined;
	phone1: string | undefined;
}

export interface IRecoverPassword {
	email: string | undefined;
}

export type ILogins = {
	senha: string;
	email: string;
};

export type TokenState = {
	token: string;
};

export interface IUsers {
	idTenant: string;
	name: string;
	email: string;
	phone1: string;
	status: boolean;
	updatedAt: Date;
	createdAt: Date;
	token: string;

	cpf: string;
	phone2?: string;
	idCustomerAsaas?: string;
	isAddInfoCompleted: boolean;

	firstConfig: {
		introduction: boolean;
		firstGrid: boolean;
		firstContract: boolean;
	};

	subscription: {
		id: string;
		idTenant: string;
		idSubAssas: string;
		idPlansCheckout: string;
		startDate: Date;
		isActive: boolean;
		methodPayment: "PIX" | "BOLETO" | "CREDIT_CARD" | "DEBIT_CARD";
		isStartPayment: boolean;
		startPayment: Date | null;
		dateCanceled: Date | null;
		isCancelPeriodEnd: boolean | null;
		creditCard: {
			creditCardNumber: string;
			creditCardBrand: string;
		};
		statusSubscriptions:
			| "ACTIVE"
			| "TRIAL"
			| "TRIAL_EXPIRED"
			| "SUSPENDED_BY_PAYMENT"
			| "CANCELED_BY_CLIENT"
			| "CANCELED_BY_PAYMENT"
			| "PENDING_PAYMENT"
			| "RENEWAL_PENDING";
		Plan: {
			id: string;
			amount: number;
			title: string;
			description: string;
			cycle: "MONTHLY" | "YEARLY";
			subscriptionsId: string;
		};
	} | null;
}

export interface IHandleLogin {
	email: string;
	senha: string;
}
