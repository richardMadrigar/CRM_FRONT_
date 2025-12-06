import {
	CampaignFlowLog,
	IFlowCampaign,
} from "src/Contexts/Campaign/CampaignContextTypes";
import { objIconsCampaignMetrics } from "../GeneralMetrics";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReportIcon from "@mui/icons-material/Report";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import { calcularPorcentagem } from "src/shared/Utils/handleCalcAverage";

const colorPending = "#ff5100";
const colorError = "#f31919eb";
const colorSent = "#14d107";
const colorSending = "#4fc047d3";

export const objCampaignFlowsStatus = {
	IN_PROGRESS: {
		color: "#6607fef7",
		text: "Processo em andamento",
	},
	PAUSED: {
		color: "#747474",
		text: "Desabilitado",
	},
	COMPLETED: {
		color: colorSent,
		text: "Finalizado",
		icon: <CheckCircleIcon fontSize="small" />,
	},
	PENDING: {
		color: colorPending,
		text: "Aguardando o próximo processo",
		icon: <HourglassTopIcon fontSize="small" />,
	},
	NOT_FINISH_CONNECTION: {
		color: colorPending,
		text: "Não finalizado (Conexão desconectada)",
		icon: <HourglassTopIcon fontSize="small" />,
	},
};

export const colorCampaignFlowsStatus = {
	IN_PROGRESS: {
		color: "#6607fef7",
		text: "Em andamento",
	},
	DISABLED: {
		color: "#747474",
		text: "Desabilitado",
	},
	COMPLETED: {
		color: colorSent,
		text: "Finalizado",
	},
	PENDING: {
		color: colorPending,
		text: "Aguardando para iniciar",
	},
	NOT_FINISH_CONNECTION: {
		color: colorPending,
		text: "Não finalizado (Conexão desconectada)",
	},
};

export const colorCampaignFlowsLogsStatus = {
	SENDING: {
		color: colorSending,
		text: "Enviando",
	},
	SENT: {
		color: colorSent,
		text: "Enviado",
	},
	ERROR: {
		color: colorError,
		text: "Erro",
	},
	PENDING: {
		color: colorPending,
		text: "Pendente",
	},
};

export const colorCampaignFlowsLogsStatusIcon = {
	SENDING: {
		color: colorSending,
		icon: <CheckCircleIcon fontSize="small" />,
	},
	SENT: {
		color: colorSent,
		icon: <CheckCircleIcon fontSize="small" />,
	},
	ERROR: {
		color: colorError,
		icon: <ReportIcon fontSize="small" />,
	},
	PENDING: {
		color: colorPending,
		icon: <HourglassTopIcon fontSize="small" />,
	},
};

export const objCampaignGeneralMetrics = (data: IFlowCampaign[]) => {
	const cardData = [
		// {
		//   title: "Leads",
		//   value: 25,
		//   icon: objIconsCampaignMetrics.LEADS,
		//   color: "#5029ff",
		//   type: "LEADS",
		// },
		{
			title: "Mensagens Enviadas",
			value: data.reduce(
				(acc, curr) =>
					acc +
					curr.CampaignFlowLogs.filter((item) => item.status === "SENT").length,
				0,
			),
			icon: objIconsCampaignMetrics.MESSAGES_SEND,
			type: "MESSAGES_SEND",
		},
		{
			title: "Pendentes",
			value: data.reduce(
				(acc, curr) =>
					acc +
					curr.CampaignFlowLogs.filter((item) => item.status === "PENDING")
						.length,
				0,
			),
			icon: objIconsCampaignMetrics.PENDING,
			color: objIconsCampaignMetrics.PENDING.color,
			type: "PENDING",
		},
		{
			title: "Falhas no Envio",
			// value: data.reduce(
			//   (acc, curr) =>
			//     acc +
			//     curr.CampaignFlowLogs.filter((item) => item.status === "ERROR")
			//       .length,
			//   0
			// ),
			value: 0,
			icon: objIconsCampaignMetrics.FAILED_SEND,
			color: "#f31919eb",
			type: "FAILED_SEND",
		},
		{
			title: "Mensagens Entregues",
			value: "(Manutenção)",
			icon: objIconsCampaignMetrics.MESSAGES_DELIVERED,
			type: "MESSAGES_DELIVERED",
			color: objIconsCampaignMetrics.MESSAGES_DELIVERED.color,
		},
		{
			title: "Mensagens Lidas",
			value: "(Manutenção)",
			icon: objIconsCampaignMetrics.MESSAGES_READ,
			color: objIconsCampaignMetrics.MESSAGES_READ.color,
			type: "MESSAGES_READ",
		},

		{
			title: "Respostas em 24h",
			value: "(Manutenção)",
			icon: objIconsCampaignMetrics.ANSWERS_RECEIVED,
			color: "#b4d132",
			type: "ANSWERS_RECEIVED",
		},
	];

	return cardData;
};

export const CampaignFlowCardDataDetails = (data: CampaignFlowLog[]) => {
	const cardData = [
		{
			title: "Mensagens Enviadas ",
			value: data.filter((item) => item.status === "SENT").length,
			color: objIconsCampaignMetrics.MESSAGES_SEND.color,
			progress: calcularPorcentagem(
				data.length,
				data.filter((item) => item.status === "SENT").length,
			),
			icon: objIconsCampaignMetrics.MESSAGES_SEND.icon,
			type: "MESSAGES_SEND",
		},
		{
			title: "Pendentes",
			value: data.filter((item) => item.status === "PENDING").length,
			color: objIconsCampaignMetrics.PENDING.color,
			progress: calcularPorcentagem(
				data.length,
				data.filter((item) => item.status === "PENDING").length,
			),
			icon: objIconsCampaignMetrics.PENDING.icon,
			type: "PENDING",
		},
		{
			title: "Falhas no Envio",
			value: data.filter((item) => item.status === "ERROR").length,
			color: objIconsCampaignMetrics.FAILED_SEND.color,
			progress: calcularPorcentagem(
				data.length,
				data.filter((item) => item.status === "ERROR").length,
			),
			icon: objIconsCampaignMetrics.FAILED_SEND.icon,
			type: "FAILED_SEND",
		},
		{
			title: "Mensagens Entregues",
			value: "(Manutenção)",
			color: objIconsCampaignMetrics.MESSAGES_DELIVERED.color,
			progress: 0,
			icon: objIconsCampaignMetrics.MESSAGES_DELIVERED.icon,
			type: "MESSAGES_DELIVERED",
		},
		{
			title: "Mensagens Lidas",
			value: "(Manutenção)",
			color: objIconsCampaignMetrics.MESSAGES_READ.color,
			progress: 0,
			icon: objIconsCampaignMetrics.MESSAGES_READ.icon,
			type: "MESSAGES_READ",
		},
		{
			title: "Respostas em 24h",
			value: "(Manutenção)",
			color: objIconsCampaignMetrics.ANSWERS_RECEIVED.color,
			progress: 0,
			icon: objIconsCampaignMetrics.ANSWERS_RECEIVED.icon,
			type: "ANSWERS_RECEIVED",
		},
	];

	return cardData;
};
