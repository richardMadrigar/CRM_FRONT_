import { SetStateAction as Action, Dispatch as DPatch } from "react";

export type IContextEmailTemplates = {
	setListEmailTemplates: DPatch<Action<IListEmailTemplate[]>>;
	listEmailTemplates: IListEmailTemplate[];

	setValuesInputsEmailTemplate: DPatch<Action<ICreateEmailTemplate>>;
	valuesInputsEmailTemplate: ICreateEmailTemplate;
};

export interface ICreateEmailTemplate {
	name: string;
	htmlContent: string;
	description: string;
}

export interface IListEmailTemplate {
	id: string;
	name: string;
	htmlContent: string;
	description: string;
	createdAt: string;
	updatedAt: string;
}
