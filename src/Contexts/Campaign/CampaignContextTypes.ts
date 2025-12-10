import type { SetStateAction as Action, Dispatch as DPatch } from "react";
import type { IStatusLeads } from "src/shared/Hooks/Https/HttpGetLeadsAll";

export type IContextCampaign = {
  setListGroupLeads: DPatch<Action<IListGroupLeads[]>>;
  listGroupLeads: IListGroupLeads[];

  setListCampaign: DPatch<Action<IListCampaign[]>>;
  listCampaign: IListCampaign[];

  setValuesInputsCampaign: DPatch<Action<ICreateCampaign>>;
  valuesInputsCampaign: ICreateCampaign;

  setValuesInputsGroupLeads: DPatch<Action<ICreateGroupLeads>>;
  valuesInputsGroupLeads: ICreateGroupLeads;

  setDataGetCampaignDetails: DPatch<Action<IDataGetCampaignDetails>>;
  dataGetCampaignDetails: IDataGetCampaignDetails;
};

export interface IDataCampaignFlowsSendLogs {
  id: string;
  idTenant: string;
  idCampaignFlowsSend: string;
  event: "request" | "delivered" | "unique_opened";
  messageId: string;
  senderEmail: string;
  deviceUsed: "DESKTOP" | "MOBILE" | null;
  userAgent: string | null;
  dateExternal: string;
  data: {
    id: number;
    ts: number;
    tag?: string;
    date: string;
    uuid: string;
    email: string;
    event: string;
    reason?: string;
    subject: string;
    ts_epoch: number;
    ts_event: number;
    "message-id": string;
    sending_ip: string;
    mirror_link?: string;
    sender_email: string;
    link?: string;
    user_agent?: string;
    device_used?: string;
  };
  createdAt: string;
}

export type IDataGetCampaignDetails = {
  id: string;
  idTenant: string;
  groupLeadsId: string;
  templateId: string;
  name: string;
  description: string;
  subject: string;
  senderName: string;
  senderEmail: string;
  dateFull: string;
  date: string;
  hour: string;
  isActive: boolean;
  status: "COMPLETED" | "IN_PROGRESS" | "PENDING" | "DISABLED";
  updatedAt: string;
  createdAt: string;
  groupLeads: {
    id: string;
    idTenant: string;
    name: string;
    description: string;
    updatedAt: string;
    createdAt: string;
  };
  CampaignFlowsSend: Array<{
    id: string;
    idTenant: string;
    idLead: string;
    idCampaign: string;
    status: "SENT" | "SENDING" | "ERROR" | "PENDING";
    dateExecution: string;
    messageId: string;
    send: boolean;
    error: boolean;

    lead: {
      id: string;
      idTenant: string;
      name: string;
      email: string;

      createdAt: string;
    };
    CampaignFlowsSendLogs: Array<IDataCampaignFlowsSendLogs>;
  }>;
};

export type IFlowCampaign = {
  id: string;
  title: string;
  dateFull: string;
  date: string;
  flowSequence: number;
  hour: string;
  message: IMessage[];
  status: "COMPLETED" | "IN_PROGRESS" | "PENDING" | "DISABLED";
  campaignId: string;
  updatedAt: string;
  createdAt: string;
  CampaignFlowLogs: CampaignFlowLog[];
};

type IMessage = {
  flow: number;
  content: string;
};

export type CampaignFlowLog = {
  id: number;
  campaignFlowId: string;
  idLead: string;
  message: string[];
  status: "SENT" | "SENDING" | "ERROR" | "PENDING";
  bodyRequest: BodyRequest;
  bodyResponse: BodyResponse;
  errorMessage: string | null;
  retryCount: number;
  dateExecution: string;
  leads: {
    id: string;
    idTenant: string;
    status: string;
    interestLevel: string;
    sourceCollection: string;
    isPlan: string;
    descriptionPlan: string;
    entityType: string;
    captureAt: string;
    name: string;
    cpf: string;
    email: string;
    whats: string;
    telefone1: string;
    birthDate: string;
    reasonAbandonment: string;
    pendingActions: string;
    observation: string;
    createdAt: string;
    updatedAt: string;
  };
};

type BodyRequest = {
  text: string;
  delay: number;
  number: string;
};

type BodyResponse = {
  key: {
    id: string;
    fromMe: boolean;
    remoteJid: string;
  };
  source: string;
  status: "PENDING" | string;
  message: {
    conversation: string;
  };
  pushName: string;
  instanceId: string;
  contextInfo: any;
  messageType: string;
  messageTimestamp: number;
};

export interface IGetLeadsAll {
  id: string;
  status: IStatusLeads;
  interestLevel: "LOW" | "MEDIUM" | "HIGH";
  sourceCollection: string;
  name: string;
  cpf: string;
  email: string;
  whats: string;
  telefone1: string;
  createdAt: string;
  captureAt: string;
}

type GroupLeads = {
  id: string;
  name: string;
  description: string;
  idTenant: string;
  updatedAt: string;
  createdAt: string;
  GroupManyLeads: GroupLead[];
};

type GroupLead = {
  id: string;
  leadId: string;
  groupLeadsId: string;
  updatedAt: string;
  createdAt: string;
  leads: {
    id: string;
    idTenant: string;
    status: string;
    interestLevel: string;
    sourceCollection: string;
    isPlan: string;
    descriptionPlan: string;
    entityType: string;
    captureAt: string;
    name: string;
    cpf: string;
    email: string;
    whats: string;
    telefone1: string;
    birthDate: string;
    reasonAbandonment: string;
    pendingActions: string;
    observation: string;
    createdAt: string;
    updatedAt: string;
  };
};

export interface ICreateCampaign {
  name: string;
  description: string;

  status: "IN_PROGRESS" | "WAITING_NEXT" | "COMPLETED" | "PAUSED";

  subject: string;
  senderName: string;
  senderEmail: string;

  groupLeadsId: string;
  templateId: string;

  dateFull: string;
  date: string;
  hour: string;
}

export interface ICreateGroupLeads {
  name: string;
  description: string;
  leads: IGetLeadsAll[];
}

export interface IListGroupLeads {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  countLeads: number;
}

export type IListCampaign = {
  id: string;
  name: string;
  description: string;
  idTenant: string;
  dateFull: string;
  date: string;
  hour: string;
  groupLeadsId: string;

  subject: string;
  senderName: string;
  senderEmail: string;
  totalSent: number;

  updatedAt: string;
  createdAt: string;
  isActive: boolean;
  status: "IN_PROGRESS" | "PENDING" | "COMPLETED" | "PAUSED";

  groupLeads: {
    id: string;
    name: string;
    description: string;
    // _count: {
    //   GroupManyLeads: number;
    // };
  };
  template: {
    id: string;
    name: string;
    description: string;
    // _count: {
    //   GroupManyLeads: number;
    // };
  };
  statusCount: {
    OPEN: number
    SPAM_COMPLAINT: number
    deferred: number
    request: number
    CLICK: number
    unique_proxy_open: number
    BOUNCE: number
    unsubscribed: number
    spam: number
    DELIVERY: number
    proxy_open: number
    blocked: number
    unique_opened: number
  };
  metrics: {
    deliverabilityRate: number
    openRate: number
    clickRate: number
    unsubscribeRate: number
    spamReportRate: number
    hardBounceRate: number
    softBounceRate: number
    blockedRate: number
    deferredRate: number
    proxyOpenRate: number
    SPAM_COMPLAINT: number
  };
};
