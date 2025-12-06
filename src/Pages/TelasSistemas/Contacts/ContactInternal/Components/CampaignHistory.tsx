import {
	Box,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Chip,
} from "@mui/material";
import { CardCore } from "src/Pages/components/CardCore/CardCore";

interface CampaignHistoryItem {
	campaign: string;
	status: string;
	sent: string;
	opened: string;
	clicked: string;
}

interface CampaignHistoryProps {
	history: CampaignHistoryItem[];
}

export const CampaignHistory = ({ history }: CampaignHistoryProps) => {
	const getStatusColor = (status: string) => {
		switch (status) {
			case "Clicado":
				return "#E3F2FD";
			case "Aberto":
				return "#E8F5E8";
			case "Enviado":
				return "#FFF3E0";
			case "Falhou":
				return "#FFEBEE";
			default:
				return "#F5F5F5";
		}
	};

	const getStatusTextColor = (status: string) => {
		switch (status) {
			case "Clicado":
				return "#1976D2";
			case "Aberto":
				return "#388E3C";
			case "Enviado":
				return "#F57C00";
			case "Falhou":
				return "#D32F2F";
			default:
				return "#616161";
		}
	};

	return (
		<CardCore sxStyle={{ margin: "0", padding: "24px" }}>
			<Box sx={{ mb: "16px" }}>
				<Typography variant="h6" sx={{ fontWeight: 600, mb: "4px" }}>
					Histórico de Campanhas ({history.length})
				</Typography>
				<Typography variant="body2" sx={{ color: "text.secondary" }}>
					Campanhas de e-mail que este lead recebeu
				</Typography>
			</Box>

			<TableContainer
				component={Paper}
				elevation={0}
				sx={{ border: "1px solid #E0E0E0" }}
			>
				<Table>
					<TableHead>
						<TableRow sx={{ backgroundColor: "#F5F5F5" }}>
							<TableCell sx={{ fontWeight: 600, color: "text.primary" }}>
								Campanha
							</TableCell>
							<TableCell sx={{ fontWeight: 600, color: "text.primary" }}>
								Status
							</TableCell>
							<TableCell sx={{ fontWeight: 600, color: "text.primary" }}>
								Enviado
							</TableCell>
							<TableCell sx={{ fontWeight: 600, color: "text.primary" }}>
								Aberto
							</TableCell>
							<TableCell sx={{ fontWeight: 600, color: "text.primary" }}>
								Clicado
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{history.map((item, index) => (
							<TableRow key={index} hover>
								<TableCell>
									<Typography variant="body2" sx={{ fontWeight: 500 }}>
										{item.campaign}
									</Typography>
								</TableCell>
								<TableCell>
									<Chip
										label={item.status}
										size="small"
										sx={{
											backgroundColor: getStatusColor(item.status),
											color: getStatusTextColor(item.status),
											fontWeight: 500,
											fontSize: "12px",
										}}
									/>
								</TableCell>
								<TableCell>
									<Typography variant="body2">{item.sent}</Typography>
								</TableCell>
								<TableCell>
									<Typography variant="body2">{item.opened}</Typography>
								</TableCell>
								<TableCell>
									<Typography variant="body2">{item.clicked}</Typography>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</CardCore>
	);
};
