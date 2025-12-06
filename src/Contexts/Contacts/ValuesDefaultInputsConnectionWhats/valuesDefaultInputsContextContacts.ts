import { GetDateUSSemValue } from "src/shared/Utils/FormatDateBR";
import { ICreateContacts } from "../ContextContactsTypes";

export const valuesDefaultInputsContacts: ICreateContacts = {
  name: "",
  phone1: "",
  phone2: "",
  phone3: "",
  email: "",
  cpf: "",
  cnpj: "",
  interestLevel: "MEDIUM",
  status: "NEW",
  sourceCollection: "",
  dateCapture: `${GetDateUSSemValue()}`,
  typeCompany: "NONE",
  description: "",
  companySize: "",
  reasonLoss: "",
  foundedAt: "",
  website: "",
  instagram: "",
  state: "",
  city: "",
  street: "",
  number: "",
  zipCode: "",
  data: "" /// json,
};
