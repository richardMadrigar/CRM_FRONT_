import React from "react";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import {
	Area,
	AreaChart,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
} from "recharts";

import moment from "moment";

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
				<Typography variant="subtitle2" color="primary">
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

interface DataPoint {
	date: string;
	value: number;
}
[];

export const Graphic = ({ data }: { data: DataPoint[] }) => {
	const theme = useTheme();
	const colorPrimary = theme.palette.secondary.main;

	return (
		<Box sx={{ minWidth: { xs: "100%", md: "60%" }, position: "relative" }}>
			<Box sx={{ ml: "36px" }}>
				<Typography variant="body2" sx={{ fontWeight: 600, mb: "8px" }}>
					Últimos 15 dias
				</Typography>
				<Box sx={{ display: "flex", mb: 1, gap: 3 }}>
					{" "}
					<Box>
						<Typography variant="caption" sx={{ color: "text.secondary" }}>
							Hoje
						</Typography>
						<Typography
							variant="body2"
							sx={{ fontWeight: 600, color: colorPrimary }}
						>
							{data[data.length - 1].value}
						</Typography>
					</Box>
					<Box>
						<Typography variant="caption" sx={{ color: "text.secondary" }}>
							Média/dia
						</Typography>
						<Typography
							sx={{ fontWeight: 600, fontSize: "14px", color: colorPrimary }}
						>
							{Math.round(
								data.reduce((sum, item) => sum + item.value, 0) / data.length,
							)}
						</Typography>
					</Box>
					<Box>
						<Typography variant="caption" sx={{ color: "text.secondary" }}>
							Total
						</Typography>
						<Typography
							variant="body2"
							sx={{ fontWeight: 600, color: colorPrimary }}
						>
							{data.reduce((sum, item) => sum + item.value, 0).toLocaleString()}
						</Typography>
					</Box>
				</Box>
			</Box>

			<Box sx={{ width: "100%", height: 110 }}>
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart
						data={data}
						margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
					>
						<defs>
							<linearGradient id="colorResponses" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor={colorPrimary} stopOpacity={0.2} />
								<stop
									offset="95%"
									stopColor={colorPrimary}
									stopOpacity={0.05}
								/>
							</linearGradient>
						</defs>

						<CartesianGrid
							strokeDasharray="3 3"
							stroke="rgba(223, 12, 12, 0.05)"
							vertical={false}
						/>

						<XAxis
							dataKey="date"
							axisLine={false}
							tickLine={false}
							tickFormatter={(value) => moment(value).format("DD/MM")}
							tick={{ fontSize: 10, fill: "rgba(107, 107, 107, 0.6)" }}
							tickMargin={8}
						/>

						<YAxis
							axisLine={false}
							tickLine={false}
							tick={{ fontSize: 10, fill: "rgba(107, 107, 107, 0.6)" }}
							tickMargin={4}
						/>
						<Tooltip content={<CustomTooltip />} />

						<Area
							type="bump"
							dataKey="value"
							stroke={colorPrimary}
							strokeWidth={2}
							fill="url(#colorResponses)"
							fillOpacity={1}
						/>
					</AreaChart>
				</ResponsiveContainer>
			</Box>
		</Box>
	);
};
