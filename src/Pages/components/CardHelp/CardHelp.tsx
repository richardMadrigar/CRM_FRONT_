import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Chip,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	useTheme,
} from "@mui/material";
import {
	ExpandMore as ExpandMoreIcon,
	CheckCircle as CheckCircleIcon,
	PriorityHigh as PriorityHighIcon,
	Link as LinkIcon,
	Tag as TagIcon,
} from "@mui/icons-material";
import { useState } from "react";
import { LinkCore } from "../LinkCore/LinkCore";

interface ICardHelp {
	id: string;
	title: string;
	description: string;
	category: string;
	priority: "high" | "medium" | "low";
	page?: {
		title: string;
		url: string;
	};
	tags?: string[];
	steps?: string[];
}

const getPriorityIcon = (priority: string) => {
	switch (priority) {
		case "high":
			return <PriorityHighIcon color="error" />;
		case "medium":
			return <PriorityHighIcon color="warning" />;
		case "low":
			return <PriorityHighIcon color="success" />;
		default:
			return null;
	}
};

export const CardHelp = ({
	description,
	title,
	category,
	priority,
	page,
	tags = [],
	steps = [],
}: ICardHelp) => {
	const theme = useTheme();
	const [expanded, setExpanded] = useState(false);

	const handleAccordionChange = () => {
		setExpanded(!expanded);
	};

	return (
		<Accordion
			expanded={expanded}
			onChange={handleAccordionChange}
			sx={{
				mb: 2,
				borderRadius: 2,
				boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
				"&:before": {
					display: "none",
				},
				"&.Mui-expanded": {
					margin: "16px 0",
				},
				border: `1px solid ${theme.palette.divider}`,
				"&:hover": {
					boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
					borderColor: theme.palette.primary.main,
				},
				transition: "all 0.3s ease",
			}}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				sx={{
					backgroundColor: expanded
						? theme.palette.primary.light + "20"
						: "transparent",
					borderRadius: expanded ? "8px 8px 0 0" : "8px",
					transition: "all 0.3s ease",
				}}
			>
				<Box
					sx={{ display: "flex", alignItems: "center", width: "100%", gap: 2 }}
				>
					{getPriorityIcon(priority)}

					<Box sx={{ flex: 1 }}>
						<Typography
							variant="h6"
							sx={{
								fontWeight: 600,
								fontSize: "1rem",
								color: theme.palette.text.primary,
								mb: 0.5,
							}}
						>
							{title}
						</Typography>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1,
								flexWrap: "wrap",
							}}
						>
							<Chip
								label={category}
								size="small"
								sx={{
									backgroundColor: theme.palette.primary.main + "20",
									color: theme.palette.primary.main,
									fontWeight: 500,
								}}
							/>
						</Box>
					</Box>
				</Box>
			</AccordionSummary>

			<AccordionDetails sx={{ pt: 0 }}>
				<Divider sx={{ mb: 2 }} />

				<Typography
					variant="body2"
					color="text.secondary"
					sx={{ mb: 2, lineHeight: 1.6 }}
				>
					{description}
				</Typography>

				{steps.length > 0 && (
					<Box sx={{ mb: 2 }}>
						<Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
							Passo a passo:
						</Typography>
						<List dense sx={{ py: 0 }}>
							{steps.map((step, index) => (
								<ListItem key={index} sx={{ py: 0.5, px: 0 }}>
									<ListItemIcon sx={{ minWidth: 32 }}>
										<CheckCircleIcon color="primary" sx={{ fontSize: 20 }} />
									</ListItemIcon>
									<ListItemText
										primary={step}
										sx={{
											"& .MuiListItemText-primary": {
												fontSize: "0.875rem",
												lineHeight: 1.5,
											},
										}}
									/>
								</ListItem>
							))}
						</List>
					</Box>
				)}

				{tags.length > 0 && (
					<Box sx={{ mb: 2 }}>
						<Box
							sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1 }}
						>
							<TagIcon sx={{ fontSize: 16, color: "text.secondary" }} />
							<Typography variant="caption" color="text.secondary">
								Tags relacionadas:
							</Typography>
						</Box>
						<Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
							{tags.map((tag, index) => (
								<Chip
									key={index}
									label={tag}
									size="small"
									variant="outlined"
									sx={{
										fontSize: "0.75rem",
										height: 24,
									}}
								/>
							))}
						</Box>
					</Box>
				)}

				{page && (
					<Box sx={{ mt: 2 }}>
						<LinkCore to={page.url}>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 1,
									p: 1.5,
									borderRadius: 1,
									backgroundColor: theme.palette.primary.main + "10",
									border: `1px solid ${theme.palette.primary.main + "30"}`,
									cursor: "pointer",
									transition: "all 0.2s ease",
									"&:hover": {
										backgroundColor: theme.palette.primary.main + "20",
										borderColor: theme.palette.primary.main,
									},
								}}
							>
								<LinkIcon color="primary" sx={{ fontSize: 20 }} />
								<Typography
									variant="body2"
									sx={{
										color: theme.palette.primary.main,
										fontWeight: 500,
									}}
								>
									{page.title}
								</Typography>
							</Box>
						</LinkCore>
					</Box>
				)}
			</AccordionDetails>
		</Accordion>
	);
};
