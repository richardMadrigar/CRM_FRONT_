import type {
  ICreateCampaign,
  ICreateGroupLeads,
} from "../CampaignContextTypes";

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
  type: "EMAIL",
};

export const valuesDefaultInputsGroupLeads: ICreateGroupLeads = {
  name: "",
  description: "",
  leads: [],
};
