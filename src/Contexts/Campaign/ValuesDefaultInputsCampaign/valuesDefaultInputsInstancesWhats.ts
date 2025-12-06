import { ICreateCampaign, ICreateGroupLeads } from "../CampaignContextTypes";

export const valuesDefaultInputsCampaign: ICreateCampaign = {
	name: "",
	description: "",
	status: "WAITING_NEXT",
	groupLeadsId: "",
	templateId: "",
	dateFull: "",
	date: "",
	hour: "",
	subject: "",
	senderName: "",
	senderEmail: "",
};

export const valuesDefaultInputsGroupLeads: ICreateGroupLeads = {
	name: "",
	description: "",
	leads: [],
};
