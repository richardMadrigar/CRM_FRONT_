import { ITypeCompany } from "src/Contexts/Contacts/ContextContactsTypes";
import { IStatusLeads } from "src/shared/Hooks/Https/HttpGetLeadsAll";

export const objLeadsStatus: Record<IStatusLeads, string> = {
	NEW: "Novo",
	IN_CONTACT: "Em contato",
	NEGOTIATION: "Negociação",
	PROPOSAL_SENT: "Proposta enviada",
	LOST: "Perdido",
	DISQUALIFIED_CLOSED: "Desqualificado",
	FUTURE_NEGOTIATION: "Futuro contato",
	PROPOSAL_ACCEPTED: "Proposta aceita",
	PROPOSAL_REJECTED: "Proposta rejeitada",
};

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

export const objLeadsTypeCompany: Record<ITypeCompany, string> = {
	NONE: "",
	PJ: "PJ",
	PF: "PF",
};
