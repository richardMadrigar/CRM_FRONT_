import { useContextCampaign } from "src/Contexts/Campaign/ContextCampaign";
import { useLayoutMainContext } from "src/Contexts/MainLayoutContext";
import { api } from "src/shared/setup/API/api";

export const UseGetByIdCampaign = () => {
  const { handleGetAlert } = useLayoutMainContext();

  const { setValuesInputsCampaign } = useContextCampaign();

  const handleGetById = async (id: string) => {
    await api
      .get<ICampaign>(`/campaign/${id}`)
      .then(({ data }) => {
        setValuesInputsCampaign({
          description: data.description,
          name: data.name,
          groupLeadsId: data.groupLeadsId,
          status: data.status,
          templateId: data.templateId,
          dateFull: data.dateFull,
          date: data.date,
          hour: data.hour,
          subject: data.subject,
          senderName: data.senderName,
          senderEmail: data.senderEmail,
        });
      })
      .catch((error) =>
        handleGetAlert({ message: error.response.data.message }),
      );
  };

  return { handleGetById };
};

interface Message {
  flow: number;
  content: string;
}

interface Flow {
  id: string;
  title: string;
  dateFull: string;
  date: string;
  hour: string;
  message: Message[];
  campaignId: string;
  status: "COMPLETED" | "IN_PROGRESS" | "PENDING" | "DISABLED";
  updatedAt: string;
  createdAt: string;
}

interface ICampaign {
  id: string;
  name: string;
  description: string;
  idTenant: string;
  groupLeadsId: string;
  templateId: string;
  dateFull: string;
  date: string;
  hour: string;
  subject: string;
  senderName: string;
  senderEmail: string;
  updatedAt: string;
  createdAt: string;
  status: "IN_PROGRESS" | "WAITING_NEXT" | "COMPLETED" | "PAUSED";
  CampaignFlowsSend: CampaignFlowsSend[];
}

export type CampaignFlowsSendEvent = "request" | "delivered" | "unique_opened" | "opened" | "clicked";

export interface CampaignFlowsSend {
  id: string;
  idTenant: string;
  idLead: string;
  idCampaign: string;
  status: string;
  dateExecution: string;
  messageId: string;
  send: boolean;
  error: boolean;
  bodyRequest: {
    to: string;
    subject: string;
    senderName: string;
    htmlContent: string;
    senderEmail: string;
  };
  bodyResponse: {
    messageId: string;
  };
  lead: {
    id: string;
    idTenant: string;
    name: string;
    email: string;
    description: string | null;
    cnpj: string;
    cpf: string;
    typeCompany: string;
    status: string;
    interestLevel: string;
    sourceCollection: string;
    startRegisterAt: string | null;
    companySize: string;
    reasonLoss: string;
    foundedAt: string;
    website: string;
    instagram: string;
    phone1: string;
    phone2: string;
    phone3: string;
    state: string;
    city: string;
    street: string;
    number: string;
    zipCode: string;
    data: {
      id: string;
      cnpj: string;
      data: string;
      alias: string;
      email: string;
      phones: string;
      source: string;
      address: string;
      founded: string;
      members: string;
      idTenant: string;
      companyId: string;
      createdAt: string;
      updatedAt: string;
      companyName: string;
      updatedData: string;
      statusActive: string;
      mainActivityId: string;
      sideActivities: string;
    };
    dateCapture: string;
    updatedAt: string;
    createdAt: string;
  };
  CampaignFlowsSendLogs: Array<{
    id: string;
    idTenant: string;
    idCampaignFlowsSend: string;
    event: CampaignFlowsSendEvent;
    messageId: string;
    senderEmail: string;
    deviceUsed: string | null;
    userAgent: string | null;
    dateExternal: string;
    createdAt: string;
  }>;
}
