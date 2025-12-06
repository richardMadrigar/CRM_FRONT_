import { SetStateAction as Action, Dispatch as DPatch } from "react";
import { ISourceCollectionLeads } from "src/Pages/components/ObjTransform";

export type IContextContacts = {
  setListContacts: DPatch<Action<IListContacts[]>>;
  listContacts: IListContacts[];

  setValuesInputsContacts: DPatch<Action<ICreateContacts>>;
  valuesInputsContacts: ICreateContacts;

  setDataGetContacts: DPatch<Action<IGetContacts>>;
  dataGetContacts: IGetContacts;
};

export type IGetContacts = {
  id: string;
  titleEvo: string;
  title: string;
  description: string;
  titleProfile: string | null;
  number: string | null;
  urlImage: string | null; //
  isSaveContact: boolean;
  archived: boolean;
  instanceId: string;
  status: "connecting" | "open" | "close" | "created";
  updatedAt: string;
  createdAt: string;
  hashApyKey: string;
};

export interface IListContacts {
  id: string;
  idTenant: string;
  name: string;
  email: string;
  description: string;
  cnpj: string;
  cpf: string;
  typeCompany: ITypeCompany;
  status: IStatusLeads;
  interestLevel: IInterestLevelLeads;
  sourceCollection: ISourceCollectionLeads;
  startRegisterAt: string | undefined;
  companySize: string | undefined;
  reasonLoss: string | undefined;
  foundedAt: string | undefined;
  website: string | undefined;
  instagram: string | undefined;
  phone1: string;
  phone2: string | undefined;
  phone3: string | undefined;
  state: string | undefined;
  city: string | undefined;
  neighborhood: string | undefined;
  street: string | undefined;
  number: string | undefined;
  complement: string | undefined;
  zipCode: string | undefined;
  companyId: string | undefined;
  mainActivity: string | undefined;
  data: string | undefined;
  dateCapture: string;
  updatedAt: string;
  createdAt: string;
}

export type IInterestLevelLeads = "LOW" | "MEDIUM" | "HIGH";

export type IStatusLeads =
  | "NEW"
  | "IN_CONTACT"
  | "NEGOTIATION"
  | "PROPOSAL_SENT"
  | "PROPOSAL_ACCEPTED"
  | "PROPOSAL_REJECTED"
  | "FUTURE_NEGOTIATION"
  | "DISQUALIFIED_CLOSED"
  | "LOST";

export type ITypeCompany = "PJ" | "PF" | "NONE";

export interface ICreateContacts {
  name: string;
  phone1: string;
  phone2: string | undefined;
  phone3: string | undefined;
  email: string | undefined;
  cpf: string;
  cnpj: string;

  interestLevel: IInterestLevelLeads;
  status: IStatusLeads;
  sourceCollection: string;

  dateCapture: string | undefined;
  typeCompany: ITypeCompany;
  description: string | undefined;
  companySize: string | undefined;
  reasonLoss: string | undefined;
  foundedAt: string | undefined;
  website: string | undefined;
  instagram: string | undefined;
  state: string | undefined;
  city: string | undefined;
  street: string | undefined;
  number: string | undefined;
  zipCode: string | undefined;
  data: string | undefined;
}
