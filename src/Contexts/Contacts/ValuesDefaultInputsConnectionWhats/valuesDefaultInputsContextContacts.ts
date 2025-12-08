import { GetDateUSSemValue } from "src/shared/Utils/FormatDateBR";
import type { ICreateContacts } from "../ContextContactsTypes";

export const valuesDefaultInputsContacts: ICreateContacts = {
  name: "",
  phone1: "",
  phone2: "",
  phone3: "",
  email: "",
  cpf: "",
  cnpj: "",
  sourceCollection: "",
  dateCapture: `${GetDateUSSemValue()}`,
  description: "",
  state: "",
  city: "",
  street: "",
  number: "",
  zipCode: "",
  data: "", /// json,
};
