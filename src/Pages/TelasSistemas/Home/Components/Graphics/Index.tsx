import React, { useEffect } from "react";
import {
	ResponsiveContainer,
	CartesianGrid,
	AreaChart,
	Tooltip,
	XAxis,
	YAxis,
	Area,
} from "recharts";
import moment from "moment";

import { Box, Typography, Paper, useTheme, useMediaQuery } from "@mui/material";
import { Send } from "@mui/icons-material";
import { UseGraphicsHomeSending } from "./Hooks/UseGraphicsHomeSending";
import { useContextDashboardContext } from "src/Contexts/Dashboard/ContextDashboardBroker";
import { UseGetMetricsConnections } from "../CardsMetrics/Hooks/UseGetMetricsConnections";
import { CardCore } from "src/Pages/components/CardCore/CardCore";

interface TooltipProps {
	active?: boolean;
	payload?: Array<{
		payload: {
			installmentNumber?: string;
			value?: number;
			dateReceived: string;
		};
		name: string;
		value: number;
	}>;
	labelStyle?: React.CSSProperties;
}

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<Paper
				elevation={8}
				sx={{
					p: 2,
					backgroundColor: "rgba(255, 255, 255, 0.95)",
					backdropFilter: "blur(10px)",
					border: "1px solid rgba(130, 52, 233, 0.2)",
					borderRadius: 2,
				}}
			>
				<Typography variant="subtitle2" color="primary" fontWeight="bold">
					Métricas
				</Typography>
				<Typography variant="body2" color="GrayText">
					Data:{" "}
					<Typography component="span" color="GrayText" sx={{ fontSize: 14 }}>
						{moment(payload[0].value).format("DD/MM/YYYY")}
					</Typography>
				</Typography>
				<Typography variant="body2" color="GrayText">
					Disparos:{" "}
					<Typography
						component="span"
						color="primary"
						sx={{ fontWeight: "bold" }}
					>
						{payload[0].value}
					</Typography>
				</Typography>
			</Paper>
		);
	}
	return null;
};

export const GraphicsHomeSending = () => {
	const { valueGraphicSendMessages } = useContextDashboardContext();
	const { data, handleGet } = UseGetMetricsConnections();
	const { handleSubmit } = UseGraphicsHomeSending();

	const theme = useTheme();

	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	useEffect(() => {
		handleSubmit();
		handleGet();
	}, [isMobile]);

	const dataGraphic = valueGraphicSendMessages.data;

	return (
		<Box sx={{ width: "100%", height: "100%" }}>
			<Paper
				sx={{
					display: "flex",
					alignItems: { xs: "center", md: "flex-start" },
					flexDirection: { xs: "column", md: "row" },
					justifyContent: { xs: "center", md: "space-between" },
					mb: 2,
					p: 2,
					background:
						theme.palette.mode === "dark"
							? "linear-gradient(135deg, rgba(52, 233, 76, 0.1) 0%, rgba(130, 52, 233, 0.05) 100%)"
							: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
					borderRadius: 3,
					border: `1px solid ${
						theme.palette.mode === "dark"
							? "rgba(52, 233, 67, 0.2)"
							: "rgba(52, 233, 67, 0.1)"
					}`,
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 2,
						mb: { xs: 2, md: 0 },
					}}
				>
					<Box
						sx={{
							p: 1,
							borderRadius: 2,
							background: "linear-gradient(135deg, #8234e9 0%, #a855f7 100%)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Send sx={{ color: "white", fontSize: { xs: 16, md: 20 } }} />
					</Box>
					<Box>
						<Typography
							variant="h6"
							fontWeight="bold"
							color="text.primary"
							sx={{ fontSize: { xs: 15, md: 20 } }}
						>
							Disparos por Dia
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ fontSize: { xs: 12, md: 16 } }}
						>
							Análise dos últimos {isMobile ? 7 : 15} dias
						</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 5,
					}}
				>
					<Box
						sx={{
							textAlign: "right",
						}}
					>
						<Typography
							fontWeight="bold"
							color="primary"
							sx={{ fontSize: { xs: 20, md: 20 } }}
						>
							{data?.countSentMessagesToday.toLocaleString() || 0}
						</Typography>
						<Typography
							color="text.secondary"
							sx={{ fontSize: { xs: 12, md: 16 } }}
						>
							Disparos de hoje
						</Typography>
					</Box>
					<Box sx={{ textAlign: "right" }}>
						<Typography
							fontWeight="bold"
							color="primary"
							sx={{ fontSize: { xs: 20, md: 20 } }}
						>
							{data?.countSentMessagesThisMonth.toLocaleString() || 0}
						</Typography>
						<Typography
							color="text.secondary"
							sx={{ fontSize: { xs: 12, md: 16 } }}
						>
							Total de disparos
						</Typography>
					</Box>

					<Box sx={{ textAlign: "right" }}>
						<Typography
							fontWeight="bold"
							color="primary"
							sx={{ fontSize: { xs: 20, md: 20 } }}
						>
							{data?.countSavedContacts.toLocaleString() || 0}
						</Typography>
						<Typography
							color="text.secondary"
							sx={{ fontSize: { xs: 12, md: 16 } }}
						>
							Novos Contatos
						</Typography>
					</Box>
				</Box>
			</Paper>

			{/* Gráfico principal */}
			<CardCore
				// elevation={2}
				sxStyle={{
					p: 3,
					m: 0,
					height: 400,
					// background:
					//   theme.palette.mode === "dark"
					//     ? "linear-gradient(135deg, rgba(52, 233, 76, 0.1) 0%, rgba(130, 52, 233, 0.05) 100%)"
					//     : "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
					// backdropFilter: "blur(10px)",
					// border: `1px solid ${theme.palette.mode === "dark"
					//   ? "rgba(52, 233, 67, 0.2)"
					//   : "rgba(52, 233, 67, 0.1)"
					//   }`,
				}}
			>
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart
						data={dataGraphic}
						margin={{ top: 20, right: -10, left: -35, bottom: 0 }}
					>
						<defs>
							<linearGradient id="colorDisparos" x1="0" y1="0" x2="0" y2="1">
								<stop
									offset="5%"
									stopColor={theme.palette.primary.main}
									stopOpacity={0.8}
								/>
								<stop
									offset="95%"
									stopColor={theme.palette.primary.main}
									stopOpacity={0.1}
								/>
							</linearGradient>
						</defs>

						<CartesianGrid
							stroke="rgba(12, 86, 223, 0.295)"
							strokeDasharray="3 3"
							vertical={false}
						/>

						<XAxis
							dataKey="date"
							tickFormatter={(value) => moment(value).format("DD/MM")}
							tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
							axisLine={{
								stroke:
									theme.palette.mode === "dark"
										? "rgba(255, 255, 255, 0.2)"
										: "rgba(0, 0, 0, 0.2)",
							}}
							tickLine={{
								stroke:
									theme.palette.mode === "dark"
										? "rgba(255, 255, 255, 0.2)"
										: "rgba(0, 0, 0, 0.2)",
							}}
						/>

						<YAxis
							tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
							axisLine={{
								stroke:
									theme.palette.mode === "dark"
										? "rgba(255, 255, 255, 0.2)"
										: "rgba(0, 0, 0, 0.2)",
							}}
							tickLine={{
								stroke:
									theme.palette.mode === "dark"
										? "rgba(255, 255, 255, 0.2)"
										: "rgba(0, 0, 0, 0.2)",
							}}
						/>

						<Tooltip content={<CustomTooltip />} />

						<Area
							type="bump"
							dataKey="value"
							stroke={theme.palette.primary.main}
							strokeWidth={3}
							fill="url(#colorDisparos)"
							fillOpacity={0.6}
							name="Disparos"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</CardCore>
		</Box>
	);
};
