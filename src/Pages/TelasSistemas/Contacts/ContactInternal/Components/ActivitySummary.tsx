import { Box, Typography, Grid, Paper } from "@mui/material";
import { CardCore } from "src/Pages/components/CardCore/CardCore";
import { Campaign, Note, Email, Mouse } from "@mui/icons-material";

interface ActivitySummaryProps {
	activities: {
		campaigns: number;
		annotations: number;
		emailsOpened: number;
		clicks: number;
	};
}

export const ActivitySummary = ({ activities }: ActivitySummaryProps) => {
	const activityCards = [
		{
			title: "Campanhas",
			value: activities.campaigns,
			icon: <Campaign />,
			color: "#E3F2FD",
			iconColor: "#2196F3",
		},
		{
			title: "Anotações",
			value: activities.annotations,
			icon: <Note />,
			color: "#FFF3E0",
			iconColor: "#FF9800",
		},
		{
			title: "E-mails Abertos",
			value: activities.emailsOpened,
			icon: <Email />,
			color: "#E8F5E8",
			iconColor: "#4CAF50",
		},
		{
			title: "Cliques",
			value: activities.clicks,
			icon: <Mouse />,
			color: "#E3F2FD",
			iconColor: "#2196F3",
		},
	];

	return (
		<CardCore sxStyle={{ margin: "0", height: "100%", padding: "24px" }}>
			<Box sx={{ display: "flex", alignItems: "center", mb: "16px" }}>
				<Typography variant="h6" sx={{ fontWeight: 600 }}>
					Resumo de Atividades
				</Typography>
			</Box>

			<Grid container spacing={2}>
				{activityCards.map((card, index) => (
					<Grid item xs={6} key={index}>
						<Paper
							elevation={0}
							sx={{
								padding: "16px",
								backgroundColor: card.color,
								borderRadius: "8px",
								textAlign: "center",
								border: `1px solid ${card.iconColor}20`,
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									mb: "8px",
								}}
							>
								<Box
									sx={{
										color: card.iconColor,
										mr: "8px",
									}}
								>
									{card.icon}
								</Box>
								<Typography
									variant="h4"
									sx={{
										fontWeight: 600,
										color: card.iconColor,
									}}
								>
									{card.value}
								</Typography>
							</Box>
							<Typography
								variant="body2"
								sx={{
									fontWeight: 500,
									color: "text.secondary",
								}}
							>
								{card.title}
							</Typography>
						</Paper>
					</Grid>
				))}
			</Grid>
		</CardCore>
	);
};
