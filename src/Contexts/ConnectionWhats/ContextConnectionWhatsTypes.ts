import { SetStateAction as Action, Dispatch as DPatch } from "react";

export type IContextConnectionWhats = {
	setListInstancesWhats: DPatch<Action<IListInstancesWhats[]>>;
	listInstancesWhats: IListInstancesWhats[];

	setValuesInputsInstancesWhats: DPatch<Action<ICreateConnectionWhats>>;
	valuesInputsInstancesWhats: ICreateConnectionWhats;

	setDataGetConnectionWhats: DPatch<Action<IGetConnectionWhats>>;
	dataGetConnectionWhats: IGetConnectionWhats;

	setQrCode: DPatch<Action<string>>;
	qrCode: string;

	setOpenQrCodeModal: DPatch<Action<boolean>>;
	openQrCodeModal: boolean;

	setValuesSettingsWhats: DPatch<Action<IWhatsAppConfig>>;
	valuesSettingsWhats: IWhatsAppConfig;
};

export type IWhatsAppConfig = {
	isAutoResponse: boolean;
	isSaveContact: boolean;
	typeResponse: "TEXT" | "IMAGE" | "AUDIO";
	message: string;
	delayDays: string;
	image: string;
	audio: string;
};

export type IGetConnectionWhats = {
	id: string;
	idTenant: string;
	title: string; //
	titleProfile: string | null;
	number: string | null; //
	urlImage: string | null; //
	instanceId: string;
	status: "connecting" | "open" | "close" | "created"; //
	createdAt: string;

	titleEvo: string;
	archived: boolean;
	updatedAt: string;
	hashApyKey: string;
	messages: {
		id: string;
		userId: string;
		fileId: string | null;
		connectionWhatsId: string;
		isSaveContact: boolean;
		text: string;
		type: "TEXT" | "IMAGE" | "AUDIO";
		status: "INACTIVE" | "ACTIVE";
		deliveryStatus: "RECEIVED" | "SENT" | "READ";
		delayDays: number;
		createdAt: string;
		updatedAt: string;
		file: {
			id: string;
			name: string;
			url: string;
			type: "IMAGE" | "AUDIO";
			size: number;
			createdAt: string;
			updatedAt: string;
		} | null;
	};
};

export interface IListInstancesWhats {
	id: string;
	idTenant: string;
	title: string; //
	titleProfile: string | null;
	number: string | null; //
	urlImage: string | null; //
	instanceId: string;
	status: "connecting" | "open" | "close" | "created"; //
	createdAt: string;

	titleEvo: string;
	archived: boolean;
	updatedAt: string;
	hashApyKey: string;
	messages: {
		id: string;
		userId: string;
		fileId: string | null;
		connectionWhatsId: string;
		isSaveContact: boolean;
		text: string;
		type: "TEXT" | "IMAGE" | "AUDIO";
		status: "INACTIVE" | "ACTIVE";
		deliveryStatus: "RECEIVED" | "SENT" | "READ";
		delayDays: number;
		createdAt: string;
		updatedAt: string;
		file: {
			id: string;
			name: string;
			url: string;
			type: "IMAGE" | "AUDIO";
			size: number;
			createdAt: string;
			updatedAt: string;
		} | null;
	};

	dataGraphic: {
		date: string;
		value: number;
	}[];
}

export interface ICreateConnectionWhats {
	title: string | undefined;
}
