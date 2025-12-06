import { useEffect } from "react";

import { Grid } from "@mui/material";
import { CardTable } from "src/Pages/components/table/Cards/CardTable";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { UseGetMetricsConnections } from "./Hooks/UseGetMetricsConnections";

export const CardsMetrics = () => {
	const { data, handleGet } = UseGetMetricsConnections();

	useEffect(() => {
		handleGet();
	}, []);

	return (
		<Grid container spacing={2} sx={{ mb: 2 }}>
			<Grid item xs={12} md={4}>
				<CardTable
					icon={{ color: "#4c41e9", icon: <ForwardToInboxIcon /> }}
					title="Disparos Hoje"
					value1={data?.countSentMessagesToday || 0}
				/>
			</Grid>

			<Grid item xs={12} md={4}>
				<CardTable
					icon={{ color: "#07b351", icon: <CheckCircleOutlineIcon /> }}
					title="Disparos esse mês"
					value1={data?.countSentMessagesThisMonth || 0}
				/>
			</Grid>

			<Grid item xs={12} md={4}>
				<CardTable
					icon={{ color: "#9200ccb5", icon: <FileCopyIcon /> }}
					title="Novos Contatos"
					value1={data?.countSavedContacts || 0}
				/>
			</Grid>
		</Grid>
	);
};
