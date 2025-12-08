

export type ISourceCollectionLeads =
  | "FACEBOOK"
  | "INSTAGRAM"
  | "LINKEDIN"
  | "GOOGLE"
  | "INDICATION"
  | "EMAIL_MARKETING"
  | "MARKETING"
  | "FORM"
  | "LADING_PAGE"
  | "DUTY"
  | "STREET"
  | "LISTING";

export const objLeadsSourceCollection: Record<ISourceCollectionLeads, string> =
{
  FACEBOOK: "Facebook",
  INSTAGRAM: "Instagram",
  LINKEDIN: "LinkeDin",
  GOOGLE: "Google",
  INDICATION: "Indicação",
  EMAIL_MARKETING: "Email-Marketing",
  MARKETING: "Marketing",
  FORM: "Formulários",
  LADING_PAGE: "Landing page",
  DUTY: "Plantão",
  LISTING: "Listagem",
  STREET: "Rua",
};

export type IInterestLevelLeads = "LOW" | "MEDIUM" | "HIGH";

export const OBjLeadsInterestLevel: Record<
  IInterestLevelLeads,
  {
    title: string;
    color: string;
  }
> = {
  LOW: {
    title: "Baixo",
    color: "#ff1e00",
  },
  MEDIUM: {
    title: "Médio",
    color: "#ff8800",
  },
  HIGH: {
    title: "Alto",
    color: "#10c200",
  },
};
